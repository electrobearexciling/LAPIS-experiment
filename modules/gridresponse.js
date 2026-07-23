var jsPsychGridResponse = (function (jspsych) {
  'use strict';

  var version = "0.0.1";

  const info = {
    name: "grid-response",
    version,
    parameters: {
      /** Provide a clear description of the parameter_name that could be used as documentation. We will eventually use these comments to automatically build documentation and produce metadata. */
      prompt: {
        type: jspsych.ParameterType.STRING,
        // BOOL, STRING, INT, FLOAT, FUNCTION, KEY, KEYS, SELECT, HTML_STRING, IMAGE, AUDIO, VIDEO, OBJECT, COMPLEX
        default: "Were you familiar with any of these images before taking part in this experiment?"
      },
      /** Provide a clear description of the parameter_name2 that could be used as documentation. We will eventually use these comments to automatically build documentation and produce metadata. */
      columns: {
        type: jspsych.ParameterType.INT,
        default: 4
      },
      elements: {
        type: jspsych.ParameterType.SELECT,
        default: []
      }
    },
    data: {
      /** Provide a clear description of the data1 that could be used as documentation. We will eventually use these comments to automatically build documentation and produce metadata. */
      rt: {
        type: jspsych.ParameterType.INT
      },
      selected_items: {
        type: jspsych.ParameterType.SELECT
      }
    },
    // prettier-ignore
    citations: {
      "apa": "",
      "bibtex": ""
    }
  };
  class GridResponsePlugin {
    constructor(jsPsych) {
      this.jsPsych = jsPsych;
    }
    static {
      this.info = info;
    }
    css() {
      return `
    <style>
      #grid-container{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        border: 1px solid black;
        width: 1000px;
        column-gap: 2px;
        row-gap: 2px;  
        margin-left:150px;
        margin-right:150px;
      }

      .grid-item {
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: visible;
        padding: 4px;
        cursor: pointer;
        border: 4px solid transparent;
        transition: border 200ms ease;
      }

      .grid-item:hover {
        border: 4px solid lightblue;
        transition: border 200ms ease;
      }

      .grid-item.selected{
        border: 4px solid green;
      }

    </style>
    `;
    }
    trial(display_element, trial) {
      var trial_data = {
        rt: 99,
        // Make sure this type and name matches the information for data1 in the data object contained within the info const.
        selected_items: []
        // Make sure this type and name matches the information for data2 in the data object contained within the info const.
      };
      // console.log("Creating layout");
      let html = this.css();
      let prompt_html = `<div style='margin-top: 60px; margin-left: 50px; margin-right: 50px;'><p>${trial.prompt}</p></div>`;
      let grid_html = `<div id='grid-container' class='grid-container'></div>`;
      let continue_button_html = `</br><div><button id='confirm_selection_button'>Confirm selection</button></div></br></br>`;
      html += prompt_html;
      html += grid_html;
      html += continue_button_html;
      display_element.innerHTML = html;
      // console.log("Creating grid structure");
      let grid = document.getElementById("grid-container");
      grid.style.gridTemplateColumns = `repeat(${trial.columns}, 1fr)`;
      const gridItemClicked = (event) => {
        let gridItem = event.currentTarget;
        if (gridItem.getAttribute("selected") === "0") {
          gridItem.setAttribute("selected", "1");
          gridItem.classList.add("selected");
        } else {
          gridItem.setAttribute("selected", "0");
          gridItem.classList.remove("selected");
        }
      };
      for (let i = 0; i < trial.elements.length; ++i) {
        let gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        gridItem.setAttribute("selected", "0");
        gridItem.setAttribute("itemIndex", i.toString());
        gridItem.addEventListener("click", gridItemClicked);
        grid.appendChild(gridItem);
        gridItem.innerHTML = trial.elements[i];
      }
      const end_trial = () => {
        let gridItems = grid.querySelectorAll("div");
        for (let i = 0; i < gridItems.length; ++i) {
          if (gridItems[i].getAttribute("selected") == "1") {
            const img = gridItems[i].querySelector('img');
            trial_data.selected_items.push(img.getAttribute('src').split('/').pop());
          }
        }
        console.log(trial_data);
        this.jsPsych.finishTrial(trial_data);
      };
      document.getElementById("confirm_selection_button").addEventListener("click", end_trial);
    }
  }

  return GridResponsePlugin;

})(jsPsychModule);
//# sourceMappingURL=index.browser.js.map
