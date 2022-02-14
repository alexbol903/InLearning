import { AppDispatch } from '../../index';
import { SetGuestsAction, SetEventsAction, EventActionEnum } from './types';
import { IUser } from '../../../models/IUser';
import { IEvent } from '../../../models/IEvent';
import UserService from '../../../api/UserService';

export const EventActionCreators = {
  setGuests: (payload: IUser[]): SetGuestsAction => ({ type: EventActionEnum.SET_GUESTS, payload}),
  setEvents: (payload: IEvent[]): SetEventsAction => ({ type: EventActionEnum.SET_EVENTS, payload }),
  fetchGuests: () => async (dispatch: AppDispatch) => {
    try {
      const response = await UserService.getUsers();
      dispatch(EventActionCreators.setGuests(response.data))

    } catch (err) {
      console.log(err);
    }
  },
  createEvent: (event: IEvent) => async (dispatch: AppDispatch) => {
    try {
      const events = localStorage.getItem('events') || '[]';
      const json = JSON.parse(events) as IEvent[];
      json.push(event);
      dispatch(EventActionCreators.setEvents(json));
      localStorage.setItem('events', JSON.stringify(json));
    } catch (err) {
      console.log(err);
    }
  },
  fetchEvents: (username: string) => async (dispatch: AppDispatch) => {
    try {
      const events = localStorage.getItem('events') || '[]';
      const json = JSON.parse(events) as IEvent[];
      const currentUserEvents = json.filter(event => event.author === username || event.guest === username) 
      dispatch(EventActionCreators.setEvents(currentUserEvents));
    } catch (err) {
      console.log(err);
    }
  }
}