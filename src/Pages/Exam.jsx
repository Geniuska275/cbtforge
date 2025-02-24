import { useEffect, useState } from "react"


const Exam = () => {
    const [show,setShow]=useState(false)
    const [score,setScore]=useState(0)
    const [currentQuestionIndex, setCurrentQuestionIndex]=useState(0)
    const [selected,setSelected]=useState(null)
    const [disabled,setDisabled]=useState(false)
    const  [next,setNext]=useState(true)

    const [isAnswering, setIsAnswering]=useState(false)
    const [answeredCorrectly, setAnsweredCorrectly]=useState(false)
    const [answerTime, setAnswerTime]=useState(0)
    const [timer,setTimer]=useState(15)
    const [isGameOver, setIsGameOver]=useState(false)
    const [isSubmitting, setIsSubmitting]=useState(false)
    const [isSubmitSuccess, setIsSubmitSuccess]=useState(false)
    const [isSubmitFailed, setIsSubmitFailed]=useState(false)
    const [isStudentDetailModalOpen, setIsStudentDetailModalOpen]=useState(false)
const [studentDetail,setStudentDetail]= useState(
    {
        name:"Kingsley Aigbojie",
        exam_id:"3ad4578",
        exam_code:"567902"
    }
)
const [time,setTime]=useState('00:00')
const [questions,setQuestions]=useState([
    {
        question:"What is the capital of Nigeria?",
        answerOptions:[
            {answerText:"lagos",iscorrect:false},
            {answerText:"benin",iscorrect:false},
            {answerText:"ibadan",iscorrect:false},
            {answerText:"FCT",iscorrect:true},
        ]
    },
    {
        question:"Who was the first President of Nigeria?",
        answerOptions:[
            {answerText:"Muhammadu Buhari",iscorrect:false},
            {answerText:"Goodluck Jonathan",iscorrect:false},
            {answerText:"Dr Nnadi azikiwe",iscorrect:false},
            {answerText:"Ahmed Tinubu ",iscorrect:true},
        ]
    },
    {
        question:"Who was the first inspector general of police?",
        answerOptions:[
            {answerText:"peter john",iscorrect:false},
            {answerText:"Nelly Osas",iscorrect:false},
            {answerText:"W.Duncan",iscorrect:false},
            {answerText:"Agnes Emeka",iscorrect:true},
        ]
    },
    {
        question:"Who is the owner of facebook?",
        answerOptions:[
            {answerText:"jeff besos",iscorrect:false},
            {answerText:"Mark zuckerberg",iscorrect:true},
            {answerText:"Elon Musk",iscorrect:false},
            {answerText:"Peter drury",iscorrect:true},
        ]
    },
    {
        question:"Deejoft Technologies is located in ?",
        answerOptions:[
            {answerText:"lagos",iscorrect:false},
            {answerText:"benin",iscorrect:false},
            {answerText:"ibadan",iscorrect:true},
            {answerText:"FCT",iscorrect:false},
        ]
    },
    {
        question:"What is the smallest unit of life?",
        answerOptions:[
            {answerText:"atom",iscorrect:false},
            {answerText:"cell",iscorrect:true},
            {answerText:"quartz",iscorrect:false},
            {answerText:"matter",iscorrect:false},
        ]
    },
    {
        question:"Beans falls under what classes of food?",
        answerOptions:[
            {answerText:"carbonhydrate",iscorrect:true},
            {answerText:"protein",iscorrect:true},
            {answerText:"water",iscorrect:false},
            {answerText:"vegetables",iscorrect:true},
        ]
    },
    {
        question:"Who is the current african footballer of the year?",
        answerOptions:[
            {answerText:"lukman",iscorrect:true},
            {answerText:"assisat ",iscorrect:false},
            {answerText:"Osimen",iscorrect:false},
            {answerText:"Salah",iscorrect:true},
        ]
    },
    {
        question:"What is the capital of Nigeria?",
        answerOptions:[
            {answerText:"lagos",iscorrect:false},
            {answerText:"benin",iscorrect:false},
            {answerText:"ibadan",iscorrect:false},
            {answerText:"FCT",iscorrect:true},
        ]
    },
    {
        question:"Who  is the president of Nigeria?",
        answerOptions:[
            {answerText:"Ahmed Tinubu",iscorrect:true},
            {answerText:"Ibrahim Badamasi",iscorrect:false},
            {answerText:"MKO Abiola",iscorrect:false},
            {answerText:" Muhamadu Buhari",iscorrect:false},
        ]
    },
])
    

// useEffect(()=>{
//     if(questions?.length === currentQuestionIndex +1){
//         alert('EXAM over')
//         clearTimeout()
//     }
//     setTimeout(()=>{
//     setCurrentQuestionIndex(currentQuestionIndex +1)
//     },5000)
// },[currentQuestionIndex,questions.length])

const HandleSelect=(answerOption)=>{
    if(answerOption.iscorrect===true){
        setScore(score + 1)
    }
    setNext(false)
    
const selected=questions[currentQuestionIndex].answerOptions.find((item)=>item.answerText ===answerOption.answerText)
setSelected(selected)
}
const handleSubmit=()=>{
    const percent=score / (questions.length) * 100;
    setDisabled(true)
    alert(`you got ${score} out of ${questions.length},and your percentage is ${percent.toFixed(2)}% `)
}
  return (
    <div>
        <div className="flex justify-between items-center p-5">
            <div>
                <h1 className="font-bold">Student Name: {studentDetail.name}</h1>
                <h1 className="font-bold">Exam ID: {studentDetail.exam_id}</h1>
                <h1 className="font-bold">Exam Code: {studentDetail.exam_code}</h1>
            </div>
            <h1>Time:{time}</h1>
        </div>
        <div>
            <div className="p-5 font-[lato]">
                <h1 className="font-bold mb-2">Instructions:</h1>
                <p>This exam will last 30 minutes.</p>
                <p>Each question is worth 1 mark.</p>
                <p>You can only attempt 3 questions.</p>
                <p>You will receive a score after completing all <span className="text-blue-400 font-bold">

                    {questions.length} 
                    </span> 
                        questions.</p>
            </div>
        </div>

        <div>

            <h1 className="font-bold text-center text-2xl font-[lato]">QUESTIONS</h1>

            <div>
                    <h1 className="p-3 font-[lato]">QUESTION {currentQuestionIndex + 1}/{questions.length}</h1>
                    <div  className="p-5">
                        <h1 className="font-bold mb-2 font-[lato]">{currentQuestionIndex +1}. {questions[currentQuestionIndex].question}</h1>
                        <div className="font-[lato]">
                            {questions[currentQuestionIndex].answerOptions.map((answerOption, index) => (
                                <div key={index} className="flex gap-2" onClick={()=>HandleSelect(answerOption)}>
                                    <input type="radio" name={`question${index + 1}`} id={`question${index + 1}_${answerOption?.answerText}` } checked={selected?.answerText === answerOption?.answerText} />
                                    <label htmlFor={`question${index + 1}_${answerOption.answerText}`}>{answerOption.answerText}</label>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                       {currentQuestionIndex ===0 ? "": <button 
                       disabled={disabled}
                       className={`bg-[#7EC5FF] md:ml-8 rounded-lg 
           font-[lato] px-3 py-2 text-white shadow-lg hover:bg-black hover:border duration-500 ${disabled && 'bg-slate-500'}`}
                       onClick={()=>{
                           
                            setCurrentQuestionIndex(currentQuestionIndex - 1)
                        }}>Previous Question</button>}
                        {currentQuestionIndex + 1 === questions.length ? <button 
                        className={`bg-[#7EC5FF] md:ml-8 rounded-lg 
           font-[lato] px-6 py-2 text-white shadow-lg hover:bg-black hover:border duration-500 mr-5 ${disabled && 'bg-slate-500'}`}
                         onClick={()=>{
                            setShow(true)
                        }}>start theory</button>:<button  disabled={next}
                        className={`bg-[#7EC5FF] md:ml-8 rounded-lg 
           font-[lato] px-3 py-2 text-white shadow-lg hover:bg-black hover:border duration-500 mr-5 ${next? "bg-slate-500":""}`}
                         onClick={()=>{
                            setCurrentQuestionIndex(currentQuestionIndex + 1)
                            setNext(true)
                        }}>Next Question</button>}
                    </div>
            </div>
           {show && <div className="mt-4" >
            <h1 className="text-center">THEORY</h1>
            <div className="flex justify-center items-center">

            <textarea type="text" className="btns w-[500px] h-[300px] ml-5 px-16 py-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-[#7EC5FF] m-3"/>
            </div>
            <div className="flex justify-end items-center">
                <h2>Finished Exam ?</h2>
                <button disabled={disabled}
                       className={`bg-[#7EC5FF] md:ml-8 rounded-lg 
           font-[lato] mr-5 px-6 py-2 text-white shadow-lg hover:bg-black hover:border duration-500 ${disabled ? "bg-slate-500":""}`}
                       onClick={()=>{                          
                          handleSubmit()
                        }}>SUBMIT</button>
            </div>


            </div>}
        </div>










    </div>
  )
}

export default Exam