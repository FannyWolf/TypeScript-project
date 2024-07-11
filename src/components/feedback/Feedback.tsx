import { useState } from 'react';
import MyButton from "../myButton/MyButton";

interface FeedbackProps {
  initialLike?: number;
  initialDislike?: number;
}

const Feedback: React.FC<FeedbackProps> = ({ initialLike = 5, initialDislike = 0}) => {

 const [like, setLike] = useState<number>(initialLike);
    const [dislike, setDislike] = useState<number>(initialDislike);


  const handleLike = () => {
    // setLike(prev => prev + 2)
    setLike(prev => prev + 1)
  }

  const handleDisLike = () => {
    setDislike(prev => prev + 1)
  }

  const handleReset = () => {
    setLike(0)
    setDislike(0)
  }

  return (
    <div>
      <div>
        <span>{like}</span>
        <MyButton onClick={handleLike} name={"👍"} />
        <MyButton onClick={handleDisLike} name={"👎"} />
        <span>{dislike}</span>
      </div>
      <div>
        <MyButton onClick={handleReset} name={"Reset Results"} />
      </div>
    </div>
  );
}

export default Feedback;
