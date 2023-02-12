import logo from './logo.svg';
import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import { rajzol} from './features/rajzSlice';
import { talalt } from './features/talalatSlice';

const Betuk=()=>{
  const dispatch=useDispatch();
  const data=useSelector(state=>state.talalat);
  const misstake=useSelector(state=>state.rajz.misstake);
  return [...Array(26)].map(function(item,index){
    return <button style={{backgroundColor:"gray"}} onClick={
      function(e){
        if(e.target.style.backgroundColor=="gray"){
          misstake<5&&dispatch(talalt(e.target.id));
          if(data.value.indexOf(e.target.id)==-1){
            data.positions.length!=data.value.length&&dispatch(rajzol())
            e.target.style.backgroundColor="red"
          }
          else
            e.target.style.backgroundColor="green"
          
          if(misstake>=5||data.positions.length==data.value.length){
            e.target.style.backgroundColor="gray"
          }
        }
      }} id={String.fromCharCode(index+97)}>{String.fromCharCode(index+97)}</button>
  })
  // {String.fromCharCode(122)}
}



const Display=()=>{
  const data=useSelector(state=>state);
  return <div>
    {data.rajz.misstake>=5?<b>Vesztettél!</b>:""}
    {data.talalat.positions.length==data.talalat.value.length?<b>Nyertél!</b>:""}
    <img src={require(""+data.rajz.value)}/><br/>
    {
      [...Array(data.talalat.value.length)].map(function(item,index){
        return <div style={{textAlign:"center",width:20,height:30,background:"red",display:"inline-block",margin:2}}>
          {data.talalat.positions.indexOf(index)!=-1?data.talalat.value[index]:"."}
        </div>;
      })
    }
  </div>
}
const Button=()=>{
  const dispatch=useDispatch();
  return <button onClick={function(){document.location.reload()}}>Ujj szó</button>
}

function App() {
  return (
    <>
      <Display/>
      <Betuk/><br/>
      <Button/>
    </>
  );
}

export default App;
