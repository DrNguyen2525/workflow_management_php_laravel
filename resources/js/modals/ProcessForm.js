import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { Slider } from 'rsuite';

import './modals.css';

function ProcessForm(props) {
  const [targets, settargets] = useState([
    'Cras justo odio',
    'Dapibus ac facilisis in',
    'Morbi leo risus'
  ]);

  const [startDate, setstartDate] = useState(new Date());

  const [endDate, setendDate] = useState(new Date());

  return (
    <div className='col process-form'>
      <div className='row form-group'>
        <div className='col-6'>
          <input
            type='text'
            className='form-control'
            id='staticEmail2'
            disabled
            value={props.todo}
          />
        </div>
        <div className='col-3'>
          <select className='custom-select' id='inputGroupSelect01'>
            <option defaultValue>Priority</option>
            <option value='1'>One</option>
            <option value='2'>Two</option>
            <option value='3'>Three</option>
          </select>
        </div>
        <div className='col-3'>
          <select className='custom-select' id='inputGroupSelect01'>
            <option defaultValue>Status</option>
            <option value='1'>One</option>
            <option value='2'>Two</option>
            <option value='3'>Three</option>
          </select>
        </div>
      </div>
      <div className='form-group'>Do it by me , abc,xyz</div>
      <div className='form-group'>Belong to abcd</div>
      <hr />
      <div className='Description'>
        <p>Description</p>
        <div className='col-6'>
          <p>Do it now</p>
        </div>
        <p>Targets</p>
        <div className='Targets'>
          <ol>
            {targets.map((target, index) => (
              <li key={index}>{target}</li>
            ))}
          </ol>
        </div>
      </div>
      <div className='info'>
        <p>Info</p>
        <div className='col form-group'>
          <div className='row form-group'>
            <div className='col'>
              <p className='col'>Progress</p>
              <Slider progress defaultValue={50} />
            </div>
            <div className='col'>
              <p className='col'>Start :</p>
              <DatePicker selected={startDate} onChange={e => setstartDate(e)} />
            </div>
          </div>
          <div className='row form-group'>
            <div className='col'>
              <p className='col'>Evaluate</p>
              <Slider progress defaultValue={50} />
            </div>
            <div className='col'>
              <p className='col'>End :</p>
              <DatePicker selected={endDate} onChange={e => setendDate(e)} />
            </div>
          </div>
          <div className='row form-group'>
            <div className='col'>
              <div className='col'>
                <div className='row justify-content-end'>
                  <button className='btn'>Save</button>
                </div>
              </div>
            </div>
            <div className='col'></div>
          </div>
          <div className='row form-group'>
            <div className='col'>
              <button className='btn'>Request for approval</button>
            </div>
            <div className='col'></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProcessForm;
