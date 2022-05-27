const circleArea = (radius)=>{
    return Math.pow(radius,2)*Math.PI;
};

const circleCircumference = (radius)=>{
    return 2*Math.PI*radius;
}


module.exports={
    circleArea,
    circleCircumference
}