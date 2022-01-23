import React, { Fragment, useState, useEffect} from "react";
import styled from "styled-components";
import "./Main.css"


const Panell = styled.div`
  padding: 1rem;
  border: 3px solid black;
  border-radius: 15px;
  width: 30%;
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const Main =()=> {

    const [total, setTotal] = useState(0);

   // services variable

    const [webPageSelected, setWebPageSelected] = useState(false);
    const [consultingSelected, setConsultingSelected] = useState(false);
    const [googleSelected, setGoogleSelected] = useState(false);

    // Quantity of pages & languages.

  const [quantityOfPages, setquantityOfPages] = useState(1);
  const [quantityOfLanguages, setquantityOfLanguages] = useState(0);
  const [suplements, setsuplements] = useState(0);
    
  // handleClick
    const handleClickWebPage = () => {
      webPageSelected ? updateTotal(-500) : updateTotal(500);
      setWebPageSelected(!webPageSelected);
    };
  
    const handleClickConsulting = () => {
      consultingSelected ? updateTotal(-300) : updateTotal (300);
      setConsultingSelected(!consultingSelected);
    };
  
    const handleClickGoogle = () => {
      googleSelected ? updateTotal(-200) : updateTotal (200);
      setGoogleSelected(!googleSelected);
    };
  
    // total variable 
    const updateTotal = (value) => {
      setTotal((prev) => prev + value);
    };

    // increase and decrease variables 

    const increaseNumberOfPages = () => {
        setquantityOfPages((prev) => prev + 1);
    }

    const decreaseNumberPages = () => {
      setquantityOfPages((prev) => {
        if (prev > 1) {
          return prev -1;
        }
        return 0;
      });
    };

    const increaseNumberLanguages = () => {
      setquantityOfLanguages((prev) => prev + 1);
    };
  
    const decreaseNumberLanguages = () => {
      setquantityOfLanguages((prev) => {
        if (prev > 0) {
          return prev - 1;
        }
        return 0;
      });
    };

    
    const handleSetQuantityOfPages = (e) => {
      setquantityOfPages(parseInt(e.target.value));
    };

    const handleSetQuantityOfLanguages = (e) => {
      setquantityOfLanguages(parseInt(e.target.value));
    };


    // UseEffect total 
    useEffect(() => {
      setsuplements(quantityOfLanguages * quantityOfPages * 30);
    }, [quantityOfPages, quantityOfLanguages]);
  
    
    // UseEffect localstorage.
    
    useEffect(() => {
      // llamar una sola vez localStorage con un obj con toda la info 

      //verificar como actualizar el dato que cambio del objeto
      localStorage.setItem("WebPageSelected", webPageSelected);
      localStorage.setItem("consultingSelected", consultingSelected);
      localStorage.setItem("googleSelected", googleSelected);
      localStorage.setItem("quantityOfPages", quantityOfPages);
      localStorage.setItem("quantityOfLanguages", quantityOfLanguages);
     
    },
     
     [
      webPageSelected,
      consultingSelected,
      googleSelected,
      quantityOfPages,
      quantityOfLanguages
    ])

    /*useEffect(() => {
      
      const obj = {
        WebPageSelected: true,
        consultoriaSelected: true, 
        googleSelected: true, 
        quantityOfPages: true, 
        quantityOfLanguages:true,
         
      }
      localStorage.setItem("data", JSON.stringify(obj));
      
      console.log(JSON.parse(localStorage.getItem("data")))
    }, [] )*/

  
    return (
      <Fragment>  
      <div>
        <p>Please select your product</p>
      <div className="checkBox">
        <label>
        <input type="checkbox" onClick={handleClickWebPage} />
        Web page ($500)
        {webPageSelected && (
        <Panell>
            <p>
              Number of pages:
              <button 
              className="button"
              value={quantityOfPages} 
              onClick={increaseNumberOfPages}>
                +
              </button>
              <input
                type="number"
                value={quantityOfPages}
                min="0"
                onChange={handleSetQuantityOfPages}
              />
              <button 
              className="button"
              value={quantityOfPages}
              onClick={decreaseNumberPages}>
                -
              </button>
            </p>
            <p>
              Number of Languages:
              <button
                className="button"
                value={quantityOfLanguages}
                onClick={increaseNumberLanguages}
              >
                +
              </button>
              <input
                type="number"
                value={quantityOfLanguages}
                min="0"
                onChange={handleSetQuantityOfLanguages}
              />
              <button
                className="button"
                value={quantityOfLanguages}
                onClick={decreaseNumberLanguages}
              >
                -
              </button>
              
            </p>
        </Panell>
                )};

        </label>
        <label>
        <input type="checkbox" onClick={handleClickConsulting} />
          SEO Consulting ($300)
        </label>
        <label>
        <input type="checkbox" onClick={handleClickGoogle} />
           Google Ads campaign ($200)
        </label>
        </div>
        <p>Price:{total + suplements} $ </p>
      </div>
      </Fragment>
    );
  }
  
  export default Main; 