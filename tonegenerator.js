const freqSlider = document.getElementById('ifreq')
const freqValue = document.getElementById('freq-value')
const volSlider = document.getElementById('ivolume')
const volValue = document.getElementById('volume-value')
const waveSelect = document.getElementById('waveform')

freqSlider.addEventListener('input', ()=>{
    freqValue.textContent = Number(freqSlider.value)
})

volSlider.addEventListener('input', ()=>{
    volValue.textContent = Number(volSlider.value)
})