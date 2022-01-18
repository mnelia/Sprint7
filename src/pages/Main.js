


import React, { Fragment, useState, useEffect} from "react";
//import { Fragment } from "react/cjs/react.production.min";
import styled from "styled-components";
import "./Main.css"

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-direction: row;
`;

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

    // cantidad paginas e idiomas 
    const [pages, setPages] = useState(1);
    const [languages, setLanguages] = useState(0);
  
    const [webPageSelected, setWebPageSelected] = useState(false);
    const [consultoriaSelected, setConsultoriaSelected] = useState(false);
    const [googleSelected, setGoogleSelected] = useState(false);

    // Quantity of pages & languages.

  const [quantityOfPages, setquantityOfPages] = useState(1);
  const [quantityOfLanguages, setquantityOfLanguages] = useState(0);
  const [suplements, setsuplements] = useState(0);
    
    const handleClickWebPage = () => {
      webPageSelected ? updateTotal(-500) : updateTotal(500);
      setWebPageSelected(!webPageSelected);
    };
  
    const handleClickConsultoria = () => {
      consultoriaSelected ? updateTotal(-300) : updateTotal (300);
      setConsultoriaSelected(!consultoriaSelected);
    };
  
    const handleClickGoogle = () => {
      googleSelected ? updateTotal(-200) : updateTotal (200);
      setGoogleSelected(!googleSelected);
    };
  
    const updateTotal = (value) => {
      setTotal((prev) => prev + value);
    };

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

    /*const increaseNumberLanguages = () => {
        setquantityOfLanguages((prev) => prev + 1);
    }

    const decreaseNumberLanguages = () => {
      setquantityOfLanguages((prev) => {
        if (prev > 1) {
          return prev -1;
        }
        return 1;
      });
    }*/

    const handleSetQuantityOfPages = (e) => {
      setquantityOfPages(parseInt(e.target.value));
    };

    const handleSetQuantityOfLanguages = (e) => {
      setquantityOfLanguages(parseInt(e.target.value));
    };

    useEffect(() => {
      setsuplements(quantityOfLanguages * quantityOfPages * 30);
    }, [quantityOfPages, quantityOfLanguages]);
  
    
    
  
    return (
      <Fragment>
      <div>
        <p>¿Que quieres hacer?</p>
      <div className="checkBox">
        <label>
        <input type="checkbox" onClick={handleClickWebPage} />
        Una pagina web ($500)
        {webPageSelected && (
        <Panell>
            <p>
              Number of pages:
              <button 
              lue={quantityOfPages} 
              onClick={increaseNumberOfPages}>
                +
              </button>
              <input
                type="number"
                value={quantityOfPages}
                min="0"
                onChange={handleSetQuantityOfPages}
              />
              <button value={quantityOfPages} onClick={decreaseNumberPages}>
                -
              </button>
            </p>
            <p>
              Number of Languages:
              <button
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
        <input type="checkbox" onClick={handleClickConsultoria} />
        Una consultoria SEO ($300)
        </label>
        <label>
        <input type="checkbox" onClick={handleClickGoogle} />
        Una campanya de Google Ads ($200)
        </label>
        </div>
        <p>precio:{total + suplements} $ </p>
      </div>
      </Fragment>
    );
  }
  
  export default Main; 