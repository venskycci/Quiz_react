export const correct = (n,st)=> {
    
    if(st.state.activate_button){
    let ids=st.state.id.slice()
    let icons=st.state.icon.slice()
    let correct_answer=st.state.correct_answers
    if(st.state.responses[st.state.i][n]===st.state.answers[st.state.i]){
      correct_answer+=1
      ids[n]='butt_win'
      icons[n]='bi bi-check-circle'
      st.setState({
            id:ids,
            icon:icons,
            show_next_butt:true,
            correct_answers:correct_answer,
            activate_button:false,
      });
    }
    else{ 
      let i=st.state.responses[st.state.i].indexOf(st.state.answers[st.state.i]); 
      ids[n]='butt_los'
      icons[n]='bi bi-x-circle'
      ids[i]='butt_win'
      icons[i]='bi bi-check-circle'
      
      st.setState({
          id:ids,
          icon:icons,
          show_next_butt:true,
          activate_button:false,
    });
  }
    }
}


  
export const fetch_data =(st)=>{
  
  fetch('https://opentdb.com/api.php?amount=5&category=22&difficulty=medium&type=multiple') // ⬅️ 1) llamada a la API, el resultado es una Promise
  .then((response) => response.json()) // ⬅️ 2) cuando la petición finalice, transformamos la respuesta a JSON (response.json() también es una Promise)
  .then((data) =>{
  
  let questionList=[];
  let answersList=[] ;
  let incorrect_answersLists=[[],[],[],[]];
  let incorrect_answersList=[]
  for (var i=0;i<5;i++){
    let j=Math.floor(Math.random()*4)
    questionList[i]=data.results[i].question
    answersList[i]=data.results[i].correct_answer
    incorrect_answersList[j]=data.results[i].correct_answer
    let k=0;
    for (var l=0;l<4;l++){
        if(l!==j){
            incorrect_answersList[l]=data.results[i].incorrect_answers[k]; 
            k++;}
     }
     incorrect_answersLists[i]=incorrect_answersList
     incorrect_answersList=[]
  }
  st.setState({question:questionList,
                 answers:answersList,
                 responses:incorrect_answersLists,})

  ;})// ⬅️ 3) aquí ya tenemos la respuesta en formato objeto
  
}

export const next =(st)=>{
  
  if(st.state.i<4){
    let increase=st.state.i+1
    st.setState({icon:[[],[],[],[]],
                   id:[[],[],[],[]],
                   i:increase,
                   show_next_butt:false,
                   activate_button:true,})
    }
  else{
      fetch_data(st);
      st.setState({show_next_butt:false,
                  show_result:true,
                  })}

     }

