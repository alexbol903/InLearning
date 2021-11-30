const API_KEY =
	'146cc75ee439e1c2cb61a9f7bac53d0e8e8f948c23d1a38d0cfc5bec00428a66';

const tickersHandlers = new Map();
const socket = new WebSocket(
	`wss://streamer.cryptocompare.com/v2?api_key=${API_KEY}`
);

const ARGEGATE_INDEX = '5';

socket.addEventListener('message', (e) => {
	const { TYPE: type, FROMSYMBOL: currency, PRICE: newPrice } = JSON.parse(
		e.data
	);

	if (type !== ARGEGATE_INDEX) return;

	const handlers = tickersHandlers.get(currency) ?? [];
	handlers.forEach((fn) => fn(newPrice));
});

function sendToWebSocket(message) {
	const stryngifiedMessage = JSON.stringify(message);

	if (socket.readyState === WebSocket.OPEN) {
		socket.send(stryngifiedMessage);
		return;
	}

	socket.addEventListener(
		'open',
		() => {
			socket.send(stryngifiedMessage);
		},
		{ once: true }
	);
}

function subscribeToTickerOnWs(ticker) {
	sendToWebSocket({
		action: 'SubAdd',
		subs: [`5~CCCAGG~${ticker}~USD`],
	});
}

function unsubscribeFromTickerOnWs(ticker) {
	sendToWebSocket({
		action: 'SubRemove',
		subs: [`5~CCCAGG~${ticker}~USD`],
	});
}

export const subscribeToTicker = (ticker, cb) => {
	const subscribers = tickersHandlers.get(ticker) || [];
	tickersHandlers.set(ticker, [...subscribers, cb]);
	subscribeToTickerOnWs(ticker);
};

export const unsubscribeFromTicker = (ticker) => {
	tickersHandlers.delete(ticker);
	unsubscribeFromTickerOnWs(ticker);
};

window.tickers = tickersHandlers
