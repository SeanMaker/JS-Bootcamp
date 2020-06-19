let grade=function (total,score) {

    if( typeof score!=='number' || typeof total!=='number'){
        throw Error('the score should be a number!')
    }

        score_stu=score/total*100
        let letter_grade=''

        if(score_stu>100 || score_stu<0){
            throw Error('the score out of range')
        }

        if (score_stu>=90){
            letter_grade='A'
        } else if(score_stu>=80){
            letter_grade='B'
        }else if(score_stu>=70){
            letter_grade='C'
        }else if(score_stu>=60){
            letter_grade='D'
        }
        else{
            letter_grade='F'
        }
        return `You got a ${letter_grade} (${score_stu}%)!`
    }

try{
let result=grade(60,50)
console.log(result)
}

catch(e){
    console.log(e.message)
}
