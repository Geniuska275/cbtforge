import { useEffect, useState } from "react"


const Exam = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex]=useState(0)
    const [disabled,setDisabled]=useState(false)
    const [score,setScore]=useState(0)
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
            {answerText:"lagos",iscorrect:false},
            {answerText:"benin",iscorrect:false},
            {answerText:"Dr Nnadi azikiwe",iscorrect:false},
            {answerText:"FCT",iscorrect:true},
        ]
    },
    {
        question:"Who was the first inspector general of police?",
        answerOptions:[
            {answerText:"lagos",iscorrect:false},
            {answerText:"benin",iscorrect:false},
            {answerText:"W.Duncan",iscorrect:false},
            {answerText:"FCT",iscorrect:true},
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
        question:"What is the capital of Nigeria?",
        answerOptions:[
            {answerText:"lagos",iscorrect:false},
            {answerText:"benin",iscorrect:false},
            {answerText:"ibadan",iscorrect:false},
            {answerText:"FCT",iscorrect:true},
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
                <p>You will receive a score after completing all 3 questions.</p>
            </div>
        </div>

        <div>

            <h1 className="font-bold text-center text-2xl font-[lato]">QUESTIONS</h1>

            <div>
                    <h1 className="p-3 font-[lato]">QUESTION {currentQuestionIndex + 1}/{questions.length}</h1>
                    <div  className="p-5">
                        <h1 className="font-bold mb-2 font-[lato]">{1}. {questions[currentQuestionIndex].question}</h1>
                        <div className="font-[lato]">
                            {questions[currentQuestionIndex].answerOptions.map((answerOption, index) => (
                                <div key={index} className="flex gap-2">
                                    <input type="radio" name={`question${index + 1}`} id={`question${index + 1}_${answerOption.answerText}`} />
                                    <label htmlFor={`question${index + 1}_${answerOption.answerText}`}>{answerOption.answerText}</label>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                       {currentQuestionIndex ===0 ? "": <button 
                       className="bg-[#7EC5FF] md:ml-8 rounded-lg 
           font-[lato] px-3 py-2 text-white shadow-lg hover:bg-black hover:border duration-500"
                       onClick={()=>{
                           
                            setCurrentQuestionIndex(currentQuestionIndex - 1)
                        }}>Previous Question</button>}
                        {currentQuestionIndex + 1 === questions.length ? <button 
                        className="bg-[#7EC5FF] md:ml-8 rounded-lg 
           font-[lato] px-6 py-2 text-white shadow-lg hover:bg-black hover:border duration-500 mr-5"
                         onClick={()=>{
                            alert("end of exam")
                        }}>submit</button>:<button  disabled={disabled}
                        className={`bg-[#7EC5FF] md:ml-8 rounded-lg 
           font-[lato] px-3 py-2 text-white shadow-lg hover:bg-black hover:border duration-500 mr-5 ${disabled ? "bg-slate-500":""}`}
                         onClick={()=>{
                            setCurrentQuestionIndex(currentQuestionIndex + 1)
                        }}>Next Question</button>}
                    </div>
            
            </div>
        </div>










    </div>
  )
}

export default Exam