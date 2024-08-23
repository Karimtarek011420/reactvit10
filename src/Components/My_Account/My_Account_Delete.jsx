
import React from 'react'
import Success from '../../assets/sucess.svg'
import '../Vclubform/Vclub_Form.css'
import { Button } from '../Button/Button'
import { Link } from 'react-router-dom'

function My_Account_Delete(props) {

    const handleDelete = async () => {
        try {
            await axios.post(
                `/API/Auth/${code}/deleteUser`, 
                {}, 
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
            dispatch(logout());
            navigate('/'); 
        } catch (err) {
            console.log('Error deleting user:', err);
        }
    }
    return (
        <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-9 text-center pt-3">
                        <img src={Success} alt="" className=''/>
                        <h3 className='vsuc-header  fw-bold lh-base'>Thanks</h3>
                        <p className='vsuc-para px-3 fw-medium lh-base'>We received your request
                        and will send approve in your mail</p>
                        <div className='w-50 mx-auto'>
                            <div className="d-flex">
                                <Button
                                    className='btns fw-semibold'
                                    buttonStyle='btn--outline2'
                                    onClick={props.onClose}
                                    >
                                    Cancel
                                </Button>
                                        <p>&nbsp;&nbsp;</p>
                                <Link to='/'>
                                    <Button
                                        className='btns fw-semibold'
                                        buttonStyle='btn--green'
                                        onClick={handleDelete}
                                        >
                                        {loading ? <PulseLoader className='mt-1' size='16' color='white'/>:
                                        "Delete"}
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  )
}

export default My_Account_Delete

