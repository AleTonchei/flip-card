import React from 'react'
import classnames from 'classnames'

import './week.scss'

const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

const Day = props => (
  <div className={classnames({ day: true, selected: props.selected })} >
    <p>{props.day}</p>
  </div>
)

const handleDay = day => (day + weekDays.length - 1) % weekDays.length

const Week = props => (
  <div className='week' >
    {
      weekDays.map((day, index) => {
        return <Day key={index} day={day} selected={props.day === index} />
      })
    }
  </div>
)

export default Week
