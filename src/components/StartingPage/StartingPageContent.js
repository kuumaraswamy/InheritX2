
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
      <label>branchId</label>
         <input  type="number"  ref={branchIdRef}/><br/>
         <label>Username</label>
        <input type="text" ref={uNameRef}/><br/>
        <label>firstName</label>
        <input type="text" ref={firstNameRef}/><br/>
        <label>MiddleName</label>
        <input type="text" ref ={middleNameRef}/><br/>
        <label>LastName</label>
        <input type="text" ref ={lastNameRef}/><br/>
        <label>Position</label>
        <input type="text" ref={positionRef}/><br/>
        <label>Password</label>
        <input type="password" ref={passwordRef}/><br/>
     <br/>
        <button onClick ={resetHandler}>Reset</button>
        
        <button onClick={submitHandler} >Add</button>
      </form>
      <table style={{border: "1px solid black"}}>
        <tbody>
        <tr style={{ backgroundColor: '#eee' }}><th style={{ border: '1px solid #ccc', padding: '8px' }}>#</th>
        <th style={{ border: '1px solid #ccc', padding: '8px' }}>Branch Id</th>
        <th style={{ border: '1px solid #ccc', padding: '8px' }}s>Username</th>
        <th style={{ border: '1px solid #ccc', padding: '8px' }}>Name</th>
        <th style={{ border: '1px solid #ccc', padding: '8px' }}>Positon</th>
        <th style={{ border: '1px solid #ccc', padding: '8px' }}>Action</th></tr>
        {items.map(item => {
        return  <tr style={{border: '1px solid black'}}>
        <td style={{ border: '1px solid gray' }}>{item.id}</td>
        <td style={{ border: '1px solid gray' }}>{item.branchId}</td>
        <td style={{ border: '1px solid gray' }}>{item.userName}</td>
        <td style={{ border: '1px solid gray' }}>{item.firstName + item.middleName }</td>
        <td style={{ border: '1px solid gray' }}>{item.position}</td>
        <td style={{ border: '1px solid gray' }} ><button onClick={() => dispatch(itemsActions.deleteItem(item.id))}>REMOVE</button></td>
          </tr>
        })}
        </tbody>
      </table>
    </section>
  );
};

export default StartingPageContent;
