// Imports

  // Winbox JS
  import WinBox from "./node_modules/winbox/src/js/winbox";

  // Terminal
  import { Terminal } from '@xterm/xterm';
  import { FitAddon } from '@xterm/addon-fit';
  import { WebLinksAddon } from '@xterm/addon-web-links';

  // Data
  import { bootup, commands, applications } from "./data";

let fitAddon = new FitAddon();
let webLinksAddon = new WebLinksAddon()

window.terminal = new Terminal({
  rows: 44,
  cols: 150,
  cursorBlink: "block",
  theme: {
      background: '#333',
      foreground: 'Cyan'
  },
});

window.terminalFrame = new WinBox({
  index: 1,
  title: "Parrot Terminal",
  class: ["no-header"],
})
window.terminalFrame.maximize(true)

window.terminal.loadAddon(fitAddon);
window.terminal.loadAddon(webLinksAddon);

window.terminal.open(document.getElementById(window.terminalFrame.id))
fitAddon.fit()

window.curr_line = "";
window.entries = [];
window.directory = "~";
window.user_meta = `┌─[✗]─[\x1B[1;3;31menvoh\x1B[0m@parrot]─[\x1B[1;3;31m${window.directory}\x1B[0m]\r\n└──╼ $ `

bootup.forEach((item, index) => {
  setTimeout(() => {
    if (index == bootup.length - 4) {
      window.terminalFrame.close()
      window.terminalFrame  = new WinBox({
        index: 1,
        title: "Parrot Terminal",
        maxHeight: 400,
        maxWudth: 600,
        top: "5%",
        right: 5,
        bottom: "10%",
        left: 5,
        background: "#252b4e",
        html: '<div class="h-full w-full overflow-x-hidden" id="terminal"></div>',
        onclose: function(force) {
          this.minimize(!this.min);
          return true;
        },
      })
      window.terminal = new Terminal({
        rows: 100,
        // cols: 150,
        cursorBlink: "block",
        theme: {
            background: '#333',
            foreground: 'Cyan'
        },
      });
      window.terminal.loadAddon(fitAddon);
      window.terminal.loadAddon(webLinksAddon);
      window.terminal.open(document.getElementById("terminal"))
      fitAddon.fit()

      // terminal.onResize(() => {
      //   fitAddon.fit()
      // })
      // terminal.clear()
      // terminalFrame.removeClass("no-header")
      // terminalFrame.maximize(false)
      // fitAddon.fit()

      window.terminal.onKey(function(data) {

        let key = data.domEvent.key;
    
        switch (data.domEvent.key) {
            case 'Backspace':
                if (window.curr_line) {
                    window.curr_line = window.curr_line.slice(0, window.curr_line.length - 1)
                    window.terminal.write("\b \b")
                }
                break;
            case 'Enter':
                if (window.curr_line) {
                    window.entries.push(window.curr_line)
    
                    if (window.curr_line in commands) {
                        let command = commands[window.curr_line]
    
                        if ('response' in command) {
                            
                            window.terminal.write("\r\n          " + command.response)
                            window.terminal.write("\r\n")
                            terminal.write(`${user_meta}`)
                            curr_line = ""
                        }
    
                        if ('function' in command) {
                            command.function()
                        }
    
                    } else {
                        window.terminal.write("\r\n           unrecognised command " + window.curr_line)
                        window.terminal.write(`\r\n${user_meta}`)
                        window.curr_line = ""
                    }
                }
            break;
            default: 
                window.curr_line += key;
                window.terminal.write(key)
            break;
        }
    
    });

    let blogBox = new WinBox({
      index: 2,
      title: "Blog",
      maxHeight: 400,
      maxWudth: 600,
      top: "5%",
      right: 5,
      bottom: "10%",
      left: 5,
      background: "#252b4e",
      url: "https://olivermharris.co.uk/blog",
  });
  
  blogBox.x = 250;
  blogBox.y = 250;
  blogBox.move();
  
  if (detectMob()) {
      blogBox.maximize(true);
  }
      
    }
    window.terminal.write("\r\n" + item)
  }, index * 50)
})


document.querySelector('#app').innerHTML = `
<!-- Header -->
        <div class="fixed h-10 w-full bg-black flex items-center justify-center">
            <div class="text-center text-white text-sm">Oliver M. Harris &lt;dev@olivermharris.co.uk&gt;</div>
        </div>

        <!-- Background -->
        <div class="h-screen bg-[#5b1b3d]">
<!-- 
            <a class="h-10 w-10 text-white block fixed top-20 left-20" target="_blank">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAERUlEQVR4nO2ab2jPQRzHP37bzGKbJQ9komZWasNMeCBpZSLyN0XhGduQJ2sPTEKj5oFHizKhkbF/Cg+QbKGIlWEMj2YsMcufMrMxXd2vzqe7z9337otT31ddrX3f977P3ff3vft8774AERERERERERG/UwMAw47luIc+xhSF0OBiD32MSQKAPofG+riHLz4fuEcgmhwabPTMpwEs2IFM6ghtHdJuF67t9MCnBCyYi0zaCW070s7xzKcALEgDgJ+CST8AJEh0MQD4KuhYnVTh+hgPfFhdK96gkcySaLKQpkuieeWZjzF3uEkPAEyG/4eJwmC1uhg1CSPZAQAZ4D9paA6odzE7hn5OZcK1I4ZLULlD++WGbbBY4pSha9UO7cM+ZFaJJhvd2vxJMVGZksA9qDaaeSxxDqLrex3ahxLNaI7lk4wqOGqpMuUx4d/FYxCpRpptLo2vQWZnJJplRIDPNP7TeKHoJPxZ25izSLMKHFiIzC5JNCN4R2UB9qOfJ6YSPVaYGPeQeXfytjFXkG4BOFCAzG4pdHuIu5RLPN/dvKjmiVzCt0JR5zbS5YMD05HZI4Wu0CLQIoNXVWpgFynqdCBdDjgwBZmx5EIGS1mHFIHeN3hhOafQPFB4DhHp7WuknQQOjEdmvQFeQMRcHAeRgZ7tfkmSlYlyf7E8JOLA+wbjHPoPo5HZ5wBJk1hKkbZYomH/Eykl/I4ScXxB2hSH/sNIyayuYgsR8DWkvSfR3EWa64TfJiKOAaRNdOg/xCTPnoocIuDvwk98usGKkS7piFiyiTh+IK1sqQzEMCoqWEPviaA3cN1hQlPFNRsJTa+mU6bxhj4AsiRELOf5z7GH0LzlmguERpaMeTMAFUTgbHJaS1yPl9V8slVd3+3zABRqOofXaBtNoc8DkEokRGGUIb7h4e0AUAmRrAxoZnub1+tQByCGzAYN6lAJkWwz42IAPZUAxRkMcxlMlkxkOjYH6BCbFNcF0LNkSwfOBAMfiYmkI7N3oIdKiMTyEQBG8aLb9gryZodzEfFsITCZFnvsuoQoXk4LdWoN9LoEKE43qjfBof+A7+Zzw3qXDTq0XNCvNNAzTxNeonpTwYHZFrOwyZZ5P3pLY39/C7D1HWQTdRaEuCd407DeAU1nWiR1WjR19hu23RrmnuB6ST5vwilNZ06GVEdGo2SlsWaX5SnLU4vvdXTfATFPsMhD2HcO1lRZnLLMN5jQ2iT12gzqzbN4/A6BA7WarS0fwV+SsEfLmhvIbCn4zwoU81UXsxcGHyTkSU5sdMdbeX/QJzvg8ZySFPRqO6A4wUlGLyCD/H+m18P2SUQ5hUqnJR+N5BNCi+/MDOHaTIM7G7ZPB+FjTDHxzR6mmTiSxkfsTX/BB+cCW8GCBoNlSVXqiWD+hQ/bZA1EEv+81PXTVN98jFni0Fi8FHnoY8yJEBqs8dAnIiIiIiIiIgLi/AI9nVWpr+UivAAAAABJRU5ErkJggg==">
            </a>

            <a class="h-10 w-10 text-white block fixed top-20 left-30" target="_blank"></a>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="10" height="10" viewBox="0 0 48 48">
                <path fill="#ffa000" d="M40,12H22l-4-4H8c-2.2,0-4,1.8-4,4v24c0,2.2,1.8,4,4,4h29.7L44,29V16C44,13.8,42.2,12,40,12z"></path><path fill="#ffca28" d="M40,12H8c-2.2,0-4,1.8-4,4v20c0,2.2,1.8,4,4,4h32c2.2,0,4-1.8,4-4V16C44,13.8,42.2,12,40,12z"></path>
                </svg>
            </a> -->

        </div>

        <!-- Footer -->
        <div class="fixed bottom-0 left-0 w-full bg-black/60 flex items-center space-x-6 px-6 py-4">

            <a class="h-10 w-10 block cursor-pointer" id="app-terminal" onclick="window.terminal.restore()">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 48 48">
                    <linearGradient id="r2MxEK_crF4r_9KDH-FAGa_UjcGNVXknmz3_gr1" x1="8.977" x2="40.764" y1="-3.107" y2="53.191" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#41474a"></stop><stop offset="1" stop-color="#323538"></stop></linearGradient><path fill="url(#r2MxEK_crF4r_9KDH-FAGa_UjcGNVXknmz3_gr1)" d="M43,40H5c-1.105,0-2-0.895-2-2V9 c0-1.105,0.895-2,2-2h38c1.105,0,2,0.895,2,2v29C45,39.105,44.105,40,43,40z"></path><linearGradient id="r2MxEK_crF4r_9KDH-FAGb_UjcGNVXknmz3_gr2" x1="8.977" x2="40.764" y1="-3.107" y2="53.191" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#eceff1"></stop><stop offset="1" stop-color="#cfd8dc"></stop></linearGradient><path fill="url(#r2MxEK_crF4r_9KDH-FAGb_UjcGNVXknmz3_gr2)" d="M42,10v27H6V10H42 M43,7H5 C3.895,7,3,7.895,3,9v29c0,1.105,0.895,2,2,2h38c1.105,0,2-0.895,2-2V9C45,7.895,44.105,7,43,7L43,7z"></path><path d="M16.52,18.527c-0.384-0.414-0.955-0.772-1.737-1.089v-1.343c0.403,0.097,0.777,0.251,1.115,0.458 l0.761,0.467v-0.893v-1.624v-0.292l-0.254-0.143c-0.398-0.225-0.932-0.369-1.622-0.438V13v-0.5h-0.5h-0.87h-0.5V13v0.69 c-0.641,0.136-1.18,0.42-1.606,0.848C10.771,15.076,10.5,15.736,10.5,16.5c0,0.703,0.21,1.311,0.625,1.809 c0.357,0.427,0.944,0.806,1.788,1.154v1.265c-0.174-0.041-0.36-0.096-0.555-0.165c-0.401-0.141-0.697-0.288-0.881-0.439 l-0.817-0.668v1.055v1.666v0.302l0.267,0.141c0.618,0.325,1.284,0.521,1.985,0.586V24v0.5h0.5h0.87h0.5V24v-0.878 c0.684-0.139,1.239-0.411,1.653-0.811c0.521-0.502,0.785-1.164,0.785-1.968C17.22,19.638,16.985,19.027,16.52,18.527z" opacity=".05"></path><path d="M16.886,18.187c-0.381-0.411-0.908-0.766-1.604-1.079v-0.315c0.123,0.056,0.241,0.118,0.354,0.187 l0.761,0.467l0.762,0.467v-0.893v-0.893v-1.624v-0.292v-0.292l-0.254-0.143l-0.254-0.143c-0.366-0.207-0.816-0.352-1.368-0.442V13 v-0.5V12h-0.5h-0.5h-0.87h-0.5h-0.5v0.5V13v0.305c-0.567,0.18-1.057,0.475-1.46,0.88C10.32,14.821,10,15.6,10,16.5 c0,0.823,0.249,1.539,0.74,2.129c0.364,0.435,0.913,0.817,1.672,1.162v0.26c-0.375-0.141-0.548-0.255-0.619-0.314l-0.817-0.668 l-0.817-0.668v1.055v1.055v1.666v0.302v0.302l0.267,0.141l0.267,0.141c0.541,0.284,1.116,0.479,1.718,0.582V24v0.5V25h0.5h0.5h0.87 h0.5h0.5v-0.5V24v-0.487c0.6-0.176,1.103-0.459,1.5-0.843c0.622-0.6,0.937-1.383,0.937-2.327 C17.72,19.508,17.44,18.782,16.886,18.187z" opacity=".05"></path><path d="M41.5,10.5v26h-35v-26H41.5 M42,10H6v27h36V10L42,10z" opacity=".05"></path><rect width="36" height="27" x="6" y="10" fill="none"></rect><path d="M41,11v25H7V11H41 M42,10H6v27h36V10L42,10z" opacity=".05"></path><polygon points="25,22.5 19,22.5 18.5,22.5 18.5,23 18.5,24 18.5,24.5 19,24.5 25,24.5 25.5,24.5 25.5,24 25.5,23 25.5,22.5" opacity=".05"></polygon><polygon points="25.5,22 25,22 19,22 18.5,22 18,22 18,22.5 18,23 18,24 18,24.5 18,25 18.5,25 19,25 25,25 25.5,25 26,25 26,24.5 26,24 26,23 26,22.5 26,22" opacity=".05"></polygon><g><path fill="#fff" d="M14.283,22.695V24h-0.87v-1.269c-0.807-0.004-1.557-0.188-2.252-0.553v-1.666 c0.23,0.188,0.574,0.363,1.031,0.523c0.457,0.161,0.864,0.253,1.221,0.277v-2.189c-0.93-0.349-1.564-0.727-1.904-1.133 C11.17,17.582,11,17.086,11,16.5c0-0.63,0.22-1.166,0.661-1.609c0.441-0.443,1.025-0.7,1.752-0.773V13h0.87v1.095 c0.838,0.04,1.464,0.176,1.877,0.409v1.624c-0.556-0.341-1.182-0.549-1.877-0.625v2.279c0.87,0.317,1.493,0.679,1.871,1.086 c0.378,0.407,0.567,0.899,0.567,1.476c0,0.666-0.211,1.202-0.633,1.609C15.667,22.359,15.066,22.607,14.283,22.695z M13.413,17.432v-1.907c-0.552,0.1-0.829,0.391-0.829,0.872C12.584,16.811,12.861,17.156,13.413,17.432z M14.283,19.465v1.822 c0.568-0.088,0.852-0.375,0.852-0.86C15.134,20.035,14.851,19.714,14.283,19.465z"></path></g><rect width="6" height="1" x="19" y="23" fill="#fff"></rect>
                    </svg>
            </a>

            <a class="h-10 w-10 block" href="https://github.com/olivermharris" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 48 48">
                    <linearGradient id="rL2wppHyxHVbobwndsT6Ca_AZOZNnY73haj_gr1" x1="4" x2="44" y1="23.508" y2="23.508" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4c4c4c"></stop><stop offset="1" stop-color="#343434"></stop></linearGradient><path fill="url(#rL2wppHyxHVbobwndsT6Ca_AZOZNnY73haj_gr1)" d="M24,4C12.954,4,4,12.954,4,24c0,8.887,5.801,16.411,13.82,19.016h12.36	C38.199,40.411,44,32.887,44,24C44,12.954,35.046,4,24,4z"></path><path d="M30.01,41.996L30,36.198c0-0.939-0.22-1.856-0.642-2.687c5.641-1.133,8.386-4.468,8.386-10.177	c0-2.255-0.665-4.246-1.976-5.92c0.1-0.317,0.174-0.645,0.22-0.981c0.188-1.369-0.023-2.264-0.193-2.984l-0.027-0.116	c-0.186-0.796-0.409-1.364-0.418-1.388l-0.111-0.282l-0.111-0.282l-0.302-0.032l-0.303-0.032c0,0-0.199-0.021-0.501-0.021	c-0.419,0-1.04,0.042-1.627,0.241l-0.196,0.066c-0.74,0.249-1.439,0.485-2.417,1.069c-0.286,0.171-0.599,0.366-0.934,0.584	C27.334,12.881,25.705,12.69,24,12.69c-1.722,0-3.365,0.192-4.889,0.571c-0.339-0.22-0.654-0.417-0.942-0.589	c-0.978-0.584-1.677-0.819-2.417-1.069l-0.196-0.066c-0.585-0.199-1.207-0.241-1.626-0.241c-0.302,0-0.501,0.021-0.501,0.021	l-0.302,0.032l-0.3,0.031l-0.112,0.281l-0.113,0.283c-0.01,0.026-0.233,0.594-0.419,1.391l-0.027,0.115	c-0.17,0.719-0.381,1.615-0.193,2.983c0.048,0.346,0.125,0.685,0.23,1.011c-1.285,1.666-1.936,3.646-1.936,5.89	c0,5.695,2.748,9.028,8.397,10.17c-0.194,0.388-0.345,0.798-0.452,1.224c-0.197,0.067-0.378,0.112-0.538,0.137	c-0.238,0.036-0.487,0.054-0.739,0.054c-0.686,0-1.225-0.134-1.435-0.259c-0.313-0.186-0.872-0.727-1.414-1.518	c-0.463-0.675-1.185-1.558-1.992-1.927c-0.698-0.319-1.437-0.502-2.029-0.502c-0.138,0-0.265,0.01-0.376,0.028	c-0.517,0.082-0.949,0.366-1.184,0.78c-0.203,0.357-0.235,0.773-0.088,1.141c0.219,0.548,0.851,0.985,1.343,1.255	c0.242,0.133,0.765,0.619,1.07,1.109c0.229,0.368,0.335,0.63,0.482,0.992c0.087,0.215,0.183,0.449,0.313,0.732	c0.47,1.022,1.937,1.924,2.103,2.023c0.806,0.483,2.161,0.638,3.157,0.683l0.123,0.003c0,0,0.001,0,0.001,0	c0.24,0,0.57-0.023,1.004-0.071v2.613c0.002,0.529-0.537,0.649-1.25,0.638l0.547,0.184C19.395,43.572,21.645,44,24,44	c2.355,0,4.605-0.428,6.703-1.176l0.703-0.262C30.695,42.538,30.016,42.422,30.01,41.996z" opacity=".05"></path><path d="M30.781,42.797c-0.406,0.047-1.281-0.109-1.281-0.795v-5.804c0-1.094-0.328-2.151-0.936-3.052	c5.915-0.957,8.679-4.093,8.679-9.812c0-2.237-0.686-4.194-2.039-5.822c0.137-0.365,0.233-0.75,0.288-1.147	c0.175-1.276-0.016-2.086-0.184-2.801l-0.027-0.116c-0.178-0.761-0.388-1.297-0.397-1.319l-0.111-0.282l-0.303-0.032	c0,0-0.178-0.019-0.449-0.019c-0.381,0-0.944,0.037-1.466,0.215l-0.196,0.066c-0.714,0.241-1.389,0.468-2.321,1.024	c-0.332,0.198-0.702,0.431-1.101,0.694C27.404,13.394,25.745,13.19,24,13.19c-1.762,0-3.435,0.205-4.979,0.61	c-0.403-0.265-0.775-0.499-1.109-0.699c-0.932-0.556-1.607-0.784-2.321-1.024l-0.196-0.066c-0.521-0.177-1.085-0.215-1.466-0.215	c-0.271,0-0.449,0.019-0.449,0.019l-0.302,0.032l-0.113,0.283c-0.009,0.022-0.219,0.558-0.397,1.319l-0.027,0.116	c-0.169,0.715-0.36,1.524-0.184,2.8c0.056,0.407,0.156,0.801,0.298,1.174c-1.327,1.62-1.999,3.567-1.999,5.795	c0,5.703,2.766,8.838,8.686,9.806c-0.395,0.59-0.671,1.255-0.813,1.964c-0.33,0.13-0.629,0.216-0.891,0.256	c-0.263,0.04-0.537,0.06-0.814,0.06c-0.69,0-1.353-0.129-1.69-0.329c-0.44-0.261-1.057-0.914-1.572-1.665	c-0.35-0.51-1.047-1.417-1.788-1.755c-0.635-0.29-1.298-0.457-1.821-0.457c-0.11,0-0.21,0.008-0.298,0.022	c-0.366,0.058-0.668,0.252-0.828,0.534c-0.128,0.224-0.149,0.483-0.059,0.708c0.179,0.448,0.842,0.85,1.119,1.002	c0.335,0.184,0.919,0.744,1.254,1.284c0.251,0.404,0.37,0.697,0.521,1.067c0.085,0.209,0.178,0.437,0.304,0.712	c0.331,0.719,1.353,1.472,1.905,1.803c0.754,0.452,2.154,0.578,2.922,0.612l0.111,0.002c0.299,0,0.8-0.045,1.495-0.135v3.177	c0,0.779-0.991,0.81-1.234,0.81c-0.031,0,0.503,0.184,0.503,0.184C19.731,43.64,21.822,44,24,44c2.178,0,4.269-0.36,6.231-1.003	C30.231,42.997,30.812,42.793,30.781,42.797z" opacity=".07"></path><path fill="#fff" d="M36.744,23.334c0-2.31-0.782-4.226-2.117-5.728c0.145-0.325,0.296-0.761,0.371-1.309	c0.172-1.25-0.031-2-0.203-2.734s-0.375-1.25-0.375-1.25s-0.922-0.094-1.703,0.172s-1.453,0.469-2.422,1.047	c-0.453,0.27-0.909,0.566-1.27,0.806C27.482,13.91,25.785,13.69,24,13.69c-1.801,0-3.513,0.221-5.067,0.652	c-0.362-0.241-0.821-0.539-1.277-0.811c-0.969-0.578-1.641-0.781-2.422-1.047s-1.703-0.172-1.703-0.172s-0.203,0.516-0.375,1.25	s-0.375,1.484-0.203,2.734c0.077,0.562,0.233,1.006,0.382,1.333c-1.31,1.493-2.078,3.397-2.078,5.704	c0,5.983,3.232,8.714,9.121,9.435c-0.687,0.726-1.148,1.656-1.303,2.691c-0.387,0.17-0.833,0.33-1.262,0.394	c-1.104,0.167-2.271,0-2.833-0.333s-1.229-1.083-1.729-1.813c-0.422-0.616-1.031-1.331-1.583-1.583	c-0.729-0.333-1.438-0.458-1.833-0.396c-0.396,0.063-0.583,0.354-0.5,0.563c0.083,0.208,0.479,0.521,0.896,0.75	c0.417,0.229,1.063,0.854,1.438,1.458c0.418,0.674,0.5,1.063,0.854,1.833c0.249,0.542,1.101,1.219,1.708,1.583	c0.521,0.313,1.562,0.491,2.688,0.542c0.389,0.018,1.308-0.096,2.083-0.206v3.75c0,0.639-0.585,1.125-1.191,1.013	C19.756,43.668,21.833,44,24,44c2.166,0,4.243-0.332,6.19-0.984C29.585,43.127,29,42.641,29,42.002v-5.804	c0-1.329-0.527-2.53-1.373-3.425C33.473,32.071,36.744,29.405,36.744,23.334z M11.239,32.727c-0.154-0.079-0.237-0.225-0.185-0.328	c0.052-0.103,0.22-0.122,0.374-0.043c0.154,0.079,0.237,0.225,0.185,0.328S11.393,32.806,11.239,32.727z M12.451,33.482	c-0.081,0.088-0.255,0.06-0.389-0.062s-0.177-0.293-0.096-0.381c0.081-0.088,0.255-0.06,0.389,0.062S12.532,33.394,12.451,33.482z M13.205,34.732c-0.102,0.072-0.275,0.005-0.386-0.15s-0.118-0.34-0.016-0.412s0.275-0.005,0.386,0.15	C13.299,34.475,13.307,34.66,13.205,34.732z M14.288,35.673c-0.069,0.112-0.265,0.117-0.437,0.012s-0.256-0.281-0.187-0.393	c0.069-0.112,0.265-0.117,0.437-0.012S14.357,35.561,14.288,35.673z M15.312,36.594c-0.213-0.026-0.371-0.159-0.353-0.297	c0.017-0.138,0.204-0.228,0.416-0.202c0.213,0.026,0.371,0.159,0.353,0.297C15.711,36.529,15.525,36.62,15.312,36.594z M16.963,36.833c-0.227-0.013-0.404-0.143-0.395-0.289c0.009-0.146,0.2-0.255,0.427-0.242c0.227,0.013,0.404,0.143,0.395,0.289	C17.381,36.738,17.19,36.846,16.963,36.833z M18.521,36.677c-0.242,0-0.438-0.126-0.438-0.281s0.196-0.281,0.438-0.281	c0.242,0,0.438,0.126,0.438,0.281S18.762,36.677,18.521,36.677z"></path>
                    </svg>
            </a>

            <a class="h-10 w-10 block" href="https://www.linkedin.com/in/olivermharris/" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 48 48">
                    <path fill="#0078d4" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5	V37z"></path><path d="M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364	c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274	L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479	C18,16.523,16.521,18,14.485,18H18v19H11z" opacity=".05"></path><path d="M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677	c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638	c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001	c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z" opacity=".07"></path><path fill="#fff" d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12	c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698	c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19	c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z"></path>
                    </svg>
            </a>

            <a class="h-10 w-10 text-white block"  href="mailto:dev@olivermharris.co.uk" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 48 48">
                    <linearGradient id="ZNqYm4G6EytizOfIqnhpwa_82aYkgJax8kO_gr1" x1="24" x2="24" y1="2.782" y2="42.377" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#6d75d6"></stop><stop offset=".123" stop-color="#8189de"></stop><stop offset=".384" stop-color="#a7adec"></stop><stop offset=".625" stop-color="#c3c7f6"></stop><stop offset=".838" stop-color="#d3d6fd"></stop><stop offset="1" stop-color="#d9dcff"></stop></linearGradient><path fill="url(#ZNqYm4G6EytizOfIqnhpwa_82aYkgJax8kO_gr1)" d="M42.462,9.254L26.355,22.089c-1.405,1.12-3.399,1.115-4.8-0.01L5.535,9.198	C4.909,8.721,4,9.161,4,9.941v5.603V36c0,1.657,1.343,3,3,3h34c1.657,0,3-1.343,3-3V9.995C44,9.201,43.083,8.759,42.462,9.254z"></path><linearGradient id="ZNqYm4G6EytizOfIqnhpwb_82aYkgJax8kO_gr2" x1="19.714" x2="19.714" y1="15.228" y2="39.139" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#7b83eb"></stop><stop offset="1" stop-color="#5961c3"></stop></linearGradient><path fill="url(#ZNqYm4G6EytizOfIqnhpwb_82aYkgJax8kO_gr2)" d="M35.429,14.858l-13.79,10.988c-1.404,1.119-3.395,1.116-4.796-0.007L4,15.545v20.459	c0,1.656,1.341,2.998,2.997,3l28.432,0.031V14.858z"></path>
                </svg>
            </a>

            <span class="grow"></span>

            <a class="h-10 w-10 text-white block" id="app-menu">
                <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 276.2 276.2" fill="currentColor">
                    <path d="M33 2a32 32 0 1 0 0 65 32 32 0 0 0 0-65zM138 2a32 32 0 1 0 0 65 32 32 0 0 0 0-65zM244 67a32 32 0 1 0 0-65 32 32 0 0 0 0 65zM32 171a32 32 0 1 0 0-65 32 32 0 0 0 0 65zM137 171a32 32 0 1 0 0-65 32 32 0 0 0 0 65zM243 171a32 32 0 1 0 0-65 32 32 0 0 0 0 65zM33 209a32 32 0 1 0 0 65 32 32 0 0 0 0-65zM138 209a32 32 0 1 0 0 65 32 32 0 0 0 0-65zM244 209a32 32 0 1 0 0 65 32 32 0 0 0 0-65z"/>
                </svg>
            </a>

        </div>
`

function detectMob() {
  return ( ( window.innerWidth <= 800 ) && ( window.innerHeight <= 600 ) );
}

document.getElementById('app-menu').onclick =() => {
    
};