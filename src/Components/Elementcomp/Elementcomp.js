import React from 'react'
import img from "../../Images/just.svg"

const content = [
    {
        title: {
            en: "Let's cool down the planet Together",
            gr: "Lasst uns gemeinsam den Planeten abkühlen", // German
            du: "Laten we samen de planeet afkoelen", // Dutch
        },
        subtitle: {
            en: "At KiteActive we believe in the future of our planet and the oceans. Wouldn't it be great if our children could enjoy the same wonderful planet as we do? Just dig in!",
            gr: "Bei KiteActive glauben wir an die Zukunft unseres Planeten und der Ozeane. Wäre es nicht großartig, wenn unsere Kinder denselben wunderbaren Planeten genießen könnten wie wir? Tauchen Sie ein!", // German
            du: "Bij KiteActive geloven we in de toekomst van onze planeet en de oceanen. Zou het niet geweldig zijn als onze kinderen van dezelfde prachtige planeet konden genieten als wij? Ga er maar in duiken!", // Dutch
        }
    }
];


const Elementcomp = ({ data, selectedLanguage }) => {
    return (
        <div>
            <div className="container-fluid ">
                <div className="row element_row">
                    <div className="col-12 col-md-3">
                        {/* <!-- Content for the first column --> */}
                        <div className=''>
                            <img src={img} alt="" className='element_img' />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div>
                            <h1 className="element_text">{data?.diggimgHeading}</h1>
                            <p className="element_para">
                            {data?.diggimgpara}
                            </p>
                        </div>
                    </div>
                    {/* <!-- Content for the third column --> */}
                    <div className="col-12 col-md-3">
                        <button
                            className="element_btn text-center"
                            onClick={() => window.location.href = 'https://justdiggit.org/'}
                        >
                            digg inn!
                        </button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Elementcomp
