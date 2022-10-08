import { useEffect, useState } from 'react';
import './App.css';
import LeftCard from './component/LeftCard/LeftCard';
import OuterCard from './component/OuterCard/OuterCard';



//get local starage
const getLocalData = () => {
  const datas =[
    {Username:"Prashant Srivastava", Userprofession:"Full Stack Developer", Usertitle:"If you're looking for random paragraphs?", Userdescription:"If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough, the next logical step is to find a random paragraph."},
    {Username:"Prashant Srivastava", Userprofession:"Full Stack Developer", Usertitle:"If you're looking for random paragraphs?", Userdescription:"If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough, the next logical step is to find a random paragraph."},
   
  ]

  let data= localStorage.getItem('userData');
  if(data){
    return JSON.parse(localStorage.getItem('userData'));
  }else{
    return datas;
  }
}
function App() {
  const [data, setData] = useState(getLocalData())
  useEffect(() => {
    localStorage.setItem('userData', JSON.stringify(data));
  }, [data])

  const addUserHandler = (userData)=>{
    setData((prevData)=>{
      return  [userData , ...prevData];
    });
  } 
  return (
    <div className="App">
      <LeftCard/>
      <OuterCard data={data} onAddUser={addUserHandler}/>
    </div>
  );
}

export default App;
