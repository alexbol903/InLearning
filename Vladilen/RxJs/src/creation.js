import {of, from, Observable, fromEvent} from 'rxjs'
import {scan, map} from 'rxjs/operators'

// const stream$ = of(1, 2, 3, 4)

// stream$.subscribe(val => {
//   console.log('Value', val)
// })


// const arr$ = from([1, 2, 3, 4]).pipe(
//   scan((acc, val) => acc.concat(val), []) 
// )

// arr$.subscribe(val => console.log(val))


// const stream$ = new Observable((observer) => {
//   observer.next('First value')

//   setTimeout(() => observer.next('After 1000 ms'), 1000)

//   setTimeout(() => observer.complete(), 1500)

//   setTimeout(() => observer.error('Something on wrong'), 2000)

//   setTimeout(() => observer.next('After 3000 ms'), 3000)

// })

// stream$.subscribe(
//   (val) => console.log('Value', val),
//   (err) => console.log('Error', err),
//   () => console.log('End')
// )


fromEvent(document.querySelector('canvas'), 'mousemove')
  .pipe(
    map( e => ({
      x: e.offsetX,
      y: e.offsetY,
      ctx: e.target.getContext('2d')
    }))
  )
  .subscribe(pos => {
    pos.ctx.fillRect(pos.x, pos.y, 2, 2)
  })

  const clear$ = fromEvent(document.getElementById('clear'), 'click')

  clear$.subscribe(() => {
    const canvas = document.querySelector('canvas')
    canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
  })