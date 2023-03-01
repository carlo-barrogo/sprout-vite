import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons'



const Header = () => {
  return (
    <div class="container-fluid">
    <div class="top-0 start-0 w-100" >
        <div class="d-flex justify-content-between">
          <div>

          <h5>Announcements</h5>
          <p>View,create, or edit announcements for all employees of your company</p>
          </div>
          <div>

          <button type="button" class="btn btn-success text-light "><FontAwesomeIcon icon={faPlus}/> Post an Announcement</button>
          </div>

        </div>
    </div>
</div>

  )
}

export default Header