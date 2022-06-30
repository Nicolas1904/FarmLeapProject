import React, {Component} from "react";

// Add button "Ajouter une taille"

class Input extends Component {
  render() {
    return (
      <ul>
        <input
          type="number"
          name="rugbymenSize"
          placeholder="Une taille en cm"
          style={{marginLeft: "-40px"}}
        />
      </ul>
    );
  }
}

class FarmLeap extends Component {
  constructor(props) {
    super(props);
    this.state = {inputList: []};
    this.onAddBtnClick = this.onAddBtnClick.bind(this);
  }

  onAddBtnClick() {
    const inputList = this.state.inputList;
    this.setState({
      inputList: inputList.concat(<Input key={inputList.length} />),
    });
  }

  // Take all sizes values

  getValue() {
    var referenceSize = document.getElementById("referenceSize").value;
    var rugbymenSize = document.getElementsByName("rugbymenSize");
    var eachSize = null;
    var summedValue = null;
    var average = null;
    var min = null;
    var max = null;

    var allSize = [];
    if (referenceSize <= 0 || rugbymenSize.value <= null) {
      alert("Veuillez renseigner une taille de référence supérieur à 0.");
      return;
    }

    for (var i = 0; i < rugbymenSize.length; i++) {
      allSize.push(rugbymenSize[i].value);
      if (rugbymenSize[i].value < referenceSize) {
        rugbymenSize[i].style.color = "red";
      }
      if (rugbymenSize[i].value == referenceSize) {
        rugbymenSize[i].style.color = "blue";
      } else {
        rugbymenSize[i].style.color = "green";
      }
    }

    Array.from(allSize).map((element) => {
      eachSize = parseInt(element);
      console.log(eachSize);
      summedValue += eachSize;
    });
    min = Math.min(...allSize);
    max = Math.max(...allSize);
    average = summedValue / rugbymenSize.length;
    alert(
      "La somme totale des tailles est de " +
        summedValue / 100 +
        " mètres. \n\nLa moyenne est de " +
        average / 100 +
        " mètres.\n\n La plus petite valeur est " +
        min +
        ". Et la plus grande est " +
        max
    );
  }

  render() {
    return (
      <div style={{marginLeft: "700px", marginTop: "150px"}}>
        <h1 style={{marginLeft: "70px", color: "green"}}>
          Taille de référence
        </h1>
        <input
          type="number"
          id="referenceSize"
          placeholder="Taille de référence en cm"
          style={{marginLeft: "100px"}}
        ></input>
        <h1 style={{color: "green"}}>
          <br />
          Taille d'un / des rugbymen(s)
          <br />
        </h1>
        <input
          type="number"
          name="rugbymenSize"
          placeholder="Une taille en cm"
          onChange={this.compareValue}
        ></input>
        <button onClick={this.onAddBtnClick} style={{marginLeft: "30px"}}>
          Ajouter une taille
        </button>
        {this.state.inputList}
        <div style={{marginTop: "50px", marginLeft: "170px"}}>
          <button onClick={this.getValue}>Envoyer</button>
        </div>
        <form
          target="_blank"
          action="https://docs.google.com/document/d/1s6GiGCFmRxV7esvGGVpyGnIqU9-8Xgi84NRi8VnENoQ/edit?usp=sharing"
        >
          <button
            type="submit"
            style={{marginTop: "380px", marginLeft: "-670px"}}
          >
            ReadMe
          </button>
        </form>
      </div>
    );
  }
}

export default FarmLeap;
