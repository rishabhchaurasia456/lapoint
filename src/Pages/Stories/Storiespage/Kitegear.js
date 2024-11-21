import React from 'react'




import crdimg4 from '../../../Images/stroyimg5.webp';
import crdimg5 from '../../../Images/stroyimg6.webp';
import crdimg6 from '../../../Images/stroyimg7webp.webp';




const imgData2 = [
    {
        id: 1,
        image: crdimg4,
    },
    {
        id: 2,
        image: crdimg5,
    },
    {
        id: 3,
        image: crdimg6,
    },


];


const Kitegear = () => {
    return (
        <div>
            <div>
                <div className="container d-flex flex-column align-items-center justify-content-center surf_container mt-3 pt-3">
                    <div className="row">
                        <div className="col">
                            <h1 className="surf_text">
                                <span className="text_span fs-1">Hoe onderhoud ik mijn kitegear?</span>
                            </h1>
                            <p className="surf_para fs-6 mt-3" >
                                Wij krijgen vaak de vragen over hoe onderhoud in mijn kite het beste. Hierbij is één van de vragen of na het gebruik in zout water, de kite afgespoeld dient te worden.

                                Om gelijk een onderscheid te maken tussen zout en zoet water is het van belang te weten wat er bij beide gebeurt.

                                Zout water zal na enige tijd conserveren, dit betekent dus dat het niet zal schimmelen. Zoet water daarentegen zal gaan schimmelen, dit wordt ook wel het weer er in krijgen genoemd. Hieruit kun je dus de conclusie trekken dat het beter is om je kite met zout dan zoet water in de kitetas te laten.

                            </p>
                        </div>
                    </div>



                    <div className='text-start'>

                        <h1 className="surf_text">
                            <span className="text_span fs-1"> Conclusie</span>
                        </h1>
                        <p className="surf_para fs-6 mt-3" >
                            Om je kite goed te onderhouden is het van groot belang dat je deze droog weg legt. Dit zal ervoor zorgen dat je kite nooit beschimmeld kan raken. Mocht het toch het geval zijn dat je je kite niet droog weg kunt leggen is het minder schadelijk met zout water dan zoet.

                            Indien je de kite wel nat weg legt zorg er dan voor dat je de kitetas niet helemaal afsluit. Nog beter zou zijn dat je de kite uitlegt zodat hij rustig kan drogen.

                            Mocht je nog andere vragen of zelfs tips voor ons hebben neem dan contact met ons op.
                        </p>



                        <div className="container">
                            <div className="row mt-3">
                                {imgData2.map((item) => (
                                    <div className="col-lg-4 mb-4" key={item.id}>
                                        <div className="card border-0 shadow">
                                            <img
                                                src={item.image}
                                                alt={`Image ${item.id}`}
                                                className="card-img-top rounded-3"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Kitegear
