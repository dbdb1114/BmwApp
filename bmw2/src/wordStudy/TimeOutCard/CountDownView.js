import { CountdownCircleTimer } from "react-native-countdown-circle-timer";

export default ({timerLong, wordIdx,chartWidth,seconds,studyChapter, nextStoreIdx}) => {
    return (
        <>
            <CountdownCircleTimer
                isPlaying
                size={chartWidth * 0.8}
                duration={seconds}
                colors={['#2ECC71', '#8E44AD', '#D35400', '#E74C3C']}
                colorsTime={[timerLong, timerLong/4, 2, 0]}
                onComplete={()=>{ 
                    if(wordIdx == studyChapter.current.length - 1  )
                    return { shouldRepeat : false }
                    else {
                    nextStoreIdx()
                    return { shouldRepeat : true, delay:0}}}}
            />
        </>
    );
}