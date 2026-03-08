const freqSlider = document.getElementById('ifreq')
const freqValue = document.getElementById('freq-value')
const volSlider = document.getElementById('ivolume')
const volValue = document.getElementById('volume-value')
const waveSelect = document.getElementById('iwaveform')
const playPauseBtn = document.getElementById('play-pause')

let audioContext = null
let osc = null
let ganho = null

function initContext(){
    if(audioContext) return

    audioContext = new AudioContext()
    ganho = audioContext.createGain()
    ganho.gain.value = 0.5

    osc = audioContext.createOscillator()
    osc.type = "sine"
    osc.frequency.value = 440

    osc.connect(ganho)
    ganho.connect(audioContext.destination)

    osc.start()
}

freqSlider.addEventListener('input', ()=>{
    freqValue.textContent = Number(freqSlider.value)
})

volSlider.addEventListener('input', ()=>{
    volValue.textContent = Number(volSlider.value)
})

waveSelect.addEventListener('change', ()=>{
    console.log(waveSelect.value)
})

let isPlaying = false

playPauseBtn.addEventListener('click', ()=> {
    isPlaying = !isPlaying

    if(isPlaying){
        initContext()
        audioContext.resume()
        playPauseBtn.textContent = "Pausar"
        console.log('TOCANDO')
    }  else {
        if(audioContext){
            audioContext.suspend()
        }
        console.log('PAUSADO')
        playPauseBtn.textContent = 'Play'
    }
})