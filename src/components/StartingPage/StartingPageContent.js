
import { useDispatch, useSelector} from 'react-redux';
import React,{useRef} from 'react'
import { itemsActions } from '../../store/items-redux/item-reducer';
import classes from './StartingPageContent.module.css';

const StartingPageContent = () => {
   
  const items  = useSelector(state => state.items.items)
  const dispatch =useDispatch()
   const branchIdRef =useRef()
   const uNameRef =useRef()
   const passwordRef = useRef()
   const firstNameRef = useRef()
   const middleNameRef = useRef()
   const lastNameRef = useRef()
   const positionRef = useRef()
  const submitHandler= e => {
    e.preventDefault()
    const branchId  = branchIdRef.current.value ;
    const userName  = uNameRef.current.value;
    const password = passwordRef.current.value;
    const firstName  =firstNameRef.current.value;
    const middleName  = middleNameRef.current.value;
    const lastName  =lastNameRef.current.value
    const position = positionRef.current.value
    const  obj  = {
      branchId,
      userName,
      firstName,
      middleName,
      lastName,
      position,
      password
    }
    dispatch(itemsActions.addItem(obj))
  }
  console.log(items)

  const resetHandler = (e)=>{
    e.preventDefault()
    branchIdRef.current.value = '';
    uNameRef.current.value = '';
    passwordRef.current.value = '';
    firstNameRef.current.value = '';
    middleNameRef.current.value = '';
    lastNameRef.current.value = ''
    positionRef.current.value = ''
  }
  return (
    <section className={classes.starting}>
      <form>
        <input  type="number"  ref={branchIdRef}/><br/>
        <input type="text" ref={uNameRef}/><br/>
        <input type="text" ref={firstNameRef}/><br/>
        <input type="text" ref ={middleNameRef}/><br/>
        <input type="text" ref ={lastNameRef}/><br/>
        <input type="text" ref={positionRef}/><br/>
        <input type="password" ref={passwordRef}/><br/>
        <button onClick ={resetHandler}>Reset</button>
        <button onClick={submitHandler}>Add</button>
      </form>
      <table style={{border: "1px solid black"}}>
        <tbody>
        <tr><th>#</th>
        <th>Branch Id</th>
        <th>Username</th>
        <th>Name</th>
        <th>Positon</th>
        <th>Action</th></tr>
        {items.map(item => {
        return  <tr style={{border: '1px solid black'}}>
            <td>{item.id}</td>
        <td>{item.branchId}</td>
        <td>{item.userName}</td>
        <td>{item.firstName + item.middleName }</td>
        <td>{item.position}</td>
        <td><button>REMOVE</button></td>
          </tr>
        })}
        </tbody>
      </table>
    </section>
  );
};

export default StartingPageContent;
