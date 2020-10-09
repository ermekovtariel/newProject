import React from 'react'
import '../css/Header.css'

function HeaderGrid() {
    return (
        <div className='container p-1'>
            <div className='g1 p-2'>
                <div className='gc1'>МАСТЕР ПРИЕДЕТ</div>
                <div className='gc2'>В ТЕЧЕНИЕ</div>
                <div className='gc3'><svg width="3em" height="3em" viewBox="0 0 16 16" class="bi bi-stopwatch" fill="currentColor" xmlns="http://www.w3.org/2000/svg" >
                
                <path fill-rule="evenodd" d="M6 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H9v1.07A7.001 7.001 0 0 1 8 16 7 7 0 0 1 7 2.07V1h-.5A.5.5 0 0 1 6 .5zM8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3zm0 2.1a.5.5 0 0 1 .5.5V9a.5.5 0 0 1-.5.5H4.5a.5.5 0 0 1 0-1h3V5.6a.5.5 0 0 1 .5-.5z"/>
                
                </svg></div>
            </div>
            <div className='g2'>
                <img className='p-4' src='data:image/webp;base64,UklGRowCAABXRUJQVlA4TH8CAAAvQwAKEC/DoG0kR7nvT/D5s6i7ExoM2kZylPv+BJ8/i7o7YdA2kqPc9yf4/FnU3Ynb2LZV5XzB3R1Slwrc6yCmByIaoAZKIHO3ECLL3N1lAoDKAlgACdAACxACMkAJcAAJwFSvgHWMYQZYSRLf9ymBkIruvowxPN3N6O73//+r930LSZKApKqo//8JIF1Vmvu+TdM0xauK/r6PCZjU6jRNC+ADNKrqVVUAUmMMxhhj8L6vHGCqULeqUz0mkXf3X2UkOXe3TAUwHGNsutsNECpXRRKoO1UAMFUAN5WnArgleQMSFUmQBMBN5Y0xemozyQs4AXcgr/bVp6oAaCA3xsgAZ+C+bdt0jCEDgvM8t8YYEyB7nqfuuq4qZEuSpIbRmJmZmZlnDLsrsHVimZnt//8I0Ybmws8R/Z8ASD/f38U8o2co+B3aiulJkWNHINPtQhd0OM7wkHCrxEETwzNJpYDhufU/+Pfnun26enlg1x15XpBcvTywgj1bSGV7QXL18shn0RFIJKSyvSC5ennkMekLTBMJqSwnuJznUH+qMjJpd7yVBWxalLc7/tsDRas07Yicw6EmKF6lHk/m4M8Xm5ojRTlkvHGBDTsPhXHLZcoTiLtEiIhkvDPpNhWud8wJQkSkn3kesGfhMLTNSULE/SEuS85sA0D7rCTcH2wAJiNmPwBAy4zcHagHLnWjNSlonvitAzbQCNlNtcBI+1/mkaEGUn5YeV+VQpKq8pKw0I4jkOlCkfZxrmPtGa+Zq8ulJ5u0Ti6XXvl8Td+FQdr3vZLux43G6yjwvZK+H6RjW2q2HE+jY0m9Ys8i1EtCK6Heub41Ij1VnuutaevsYt7ZVgMA'></img>
                <div className='pl-2 pr-2 pb-2 zayavka'>ОСТАВЬТЕ ЗАЯВКУ
                    <br></br>
                НА ВЫЗОВ МАСТЕРА
                </div>

                <div class="input-group p-3">
                  <div class="input-group-prepend">
                    <div class="input-group-text">
                       <input type="radio" aria-label="Radio button for following text input" />
                    </div>
                  </div>
                        <input type="text" class="form-control" aria-label="Text input with radio button" />
                </div>
                <div class="input-group pl-3 pr-3 pb-3">
                  <div class="input-group-prepend">
                    <div class="input-group-text">
                       <input type="radio" aria-label="Radio button for following text input" />
                    </div>
                  </div>
                        <input type="text" class="form-control" aria-label="Text input with radio button" />
                </div>
                <button className='btnk btn btn-warning'>ВЫЗВАТЬ МАСТЕРА</button>
                <div className='p-3'>
                *Ваши персональные данные в безопасности
                </div>
            </div>
            
        </div>
    )
}

export default HeaderGrid
