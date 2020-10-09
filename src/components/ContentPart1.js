import React from 'react'
import './css/Content.css'
function Content() {
    return (
        <div>
            <br></br>
            <div className='startOfContent'>
                <div className='i1'><img src='data:image/webp;base64,UklGRroEAABXRUJQVlA4TK4EAAAvWUARELfkoI0kR/Lu3WcKzx/jxW4aDtu2kSRm9v67Dq7/IvdJ7KCNJEfy7H6G8PxJXphpOLatHc+eV7HtVCnt1JmAq7TprGFkPnaX37ZtmwFoQkBBwAECBgYCAQ9cECBgYGAwiEDABwEFAhcUFBgCUGBwgUBAQcCa/DQRozSqGPR397sqx3lcmSbo6vvq7laK+rYfM+lONQkf5+U5josjuanw00Mq/w1xJ1+Z+U8GiXnlAm9398/dHYG0k8VItJOXTDcaG/f03XU17cQ1ineuZTuOm1O00sJy3JQiMzDkuQkkxAQyAQlUAPez1r6qm3VbvLKbmbFkcvUdFAyvmTFU1EJdhA0DEUEJLiWAqAmQL6Jr3AlQnsVDzW/D2uRLcpSEO5RdUWVGl56pSu35eF0NZW+iWrYtGlXSUZ6anJcVsjtqfc61WwOmCkYV4B+/mT5f1u79fr9l8TpWZf//f/r9entAbdv2tG2m1CkzM1NS9piZKameVZI1Zra78JjZGm8/eFGjWPKLnyL6D8GNJEWSs3LpqI57v4D+2+b9g8KbX1a5Oz16Wcj9qLSRoTwuuG7qfON0mUu9Tblu/ncNMpR3HnfEx57aMpfKCod7+1qnkZlc8ynhX0bqy1wqwwn1d3ZETREE2JfxxjKXuseAiJ3dVWY1/Q1Kvsjd+Xon+7DOKuXZw+ydr2tS3Ol6tV1Kcac7uRszFcG9TAnucDffW/cHJU7Ri+Iua8NF6kRbJbrnECrJu7y4y/kGK7CMoACEe5NN6JrLqPj4x1ufQqlQ/1BPbXE/5hZ5nABQkeqdCcxzACcw/bTQgq6mhXBXxhrQNw44sTYY+KHeWnTbFSK9uavq/ieKExgcb6whOAaJBCZiU6sdu51PpzcM1KHbTIEt98+gY4V0fnmqPfZeEJxIAHMnmgNzJcBPdkTt+K79i6Nt0Us+lbp2qL++PhL9vW/rVF/cvslBNyp2xW0r3t7RWm3f4qAA/NRszK5u7WiPW+8/U72kL/WX3bUROxadTt4UBCtgIn4uWZHpaMx+f48BTmiGgX0+f6zKfvzuKyfSdekrws8c/2UlP9z8zABrJg3lwv/kCyZVPUzaiVOpekkDhFJCoNRLS74QCKGUgLSUVlgOSMHKlLeUPtLra4z06tpI70NjpHehDdCD27bv0JjthyjowzeO9nTpzC6uDxFbeuqqdOa7IBpt7axEOnPlH9+T55cqwunpy3S6cKQqEkJPX30SwrvbFjUnSH1GmL86UGdMkArpV/3kcL1BgUrFylzvTAg8fZyMqHt6frDFMu/Jw3zme5Wt7FBrDJn3wBPCOzxjl+6cVOMe5X1G+acDM7ayIYCyPgXi+Admkm9UDYGjq5wAYfzAOa5qCET3fuREPj+oGgKRmj3SAKhqknowVtUk5aheaphyBOe+3BBQzqqXWlHW3F9C5azbt2lqQNWw/I2NVLXMtternraF5693RSxm/72dGbaEFvDNunGNJ1V66MCPyxpz8QIFzed2X1d0nts9x9BzDcfTIC8omAgVaQ1ee8Jh+uMIb3msIbBfZ9Oeqz9e+tRi30xgVkvf2ISJjPW1WCj4zDQ0m0jDjIX+VwkC'></img></div>
                <div className='i2'><img src='data:image/webp;base64,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'></img></div>
                <div className='i3'><img src='data:image/webp;base64,UklGRtIEAABXRUJQVlA4TMYEAAAvWUARECcFt5EkR1JM46RT6ftvIydd5YbbSJIUKWdPOvXZfxsZZhpyJEmKJO/l/e6R/joydAUc27aWJ8/+P+7u6XQKnpSeTCDjQoZACx2VQ+mtuzv8GoAmBIOBYDAQAgRBQFDgAoJBQDAEDIJAAcEBJwQqBAIVDqhgKCA4gYg3vTX9Iry9HTvjFJSZ2+ooPf3MYNP29v5K5mB7tPTsY125TY+W2eGdFg6nyRjbs/J+f3ds769MurKx/81JI8mbGZ1eTx3OM/s4M52SasDU4T8zJzv7TTrbmeft/dGUOrWKjTZymSz8IdEETXD020TF0TBIF3pxwCFBBcKgt4a3aPATCCvJBkvQpJX7JpEARgmTCU+DJYCvesMfrvCdnpPqBWuzDi+nDq5Zh8TU2i0XBJftdKe8nzoYs5Zjaj3MOthqQVOOlv//89FMreFudqih/Xx+5rfDoz7baXWWT9bhrINxVJo6mLAfl+fFU+sb2tvtbXbd7z1Qu7Y9bSNJDrV1hpmZmZmZmSTPvAX7LfhtpAxtcHjGyjLvDuM/ZdVa/BTR/wlg/weu32lWjTEmSZLEGGOS940xJrFumr9vy3Ird6qalFKEiEhKUYyIMSlFGIWWIzI/jMhaaWqMVa+mECCkUq9CAEAqDVIEUtiVQJVpvpUqxZc3LllxHAFw/7JFmy9GEHbuWLpodwzisWUZmbnDrRil3s6bPGbCj4hPFs6cMOY1Ie1YMGXsuGehtCXCZP4oK1Xds2Ryu5c9R7Rzzpis19YXq6VTi17mNA6FBXaMGlw8+h1jvxDtm+4ztmEgpk3jM4z97ACi3WMz7NFAFPWsGcbZz3GExyfmWP0bEGlLEOnp2Z9aCIDdJ0//SiFAfP7U2a/RBRCRUhQBRKQ0YQghklaEEATSqpCRvRBJa0VEpLTWioiU1loTxVYxAkBbhjr3Hzh67OgHjx07dvT9Y8eOHbV+4EAnGUtVfWXh7Bnp7NZVW0nP/AnFdLYSe/1zh7N0XnPY9f+f1O/eun2m4H3k3u1bv2zPcEfcqWpdOex7H3hY0br63YisG+oNFQGW9hY9xtjDMkKkGiuL3AkbGgQywNJe32MPyxhIoNq8kW7gv+lQiiAq7fEflqNAyFA/dwXb9i2BFEHYe6I3DIQEurhsepG5Ibv+RwIpZACBFBLo4rJZo7OO4Ll1P8YgHj8Wjx8LiC8smzUmxx3BeG7dj6F8/L4MLyyfNSbHmSsYz6279JEny2eNyXHmDsb/7PlI56ZJBc5c8qAMH4HBVx2eSx6UMRAfDrD0usNzx4ObGAgZAEAgRYDl1x2eK+5/hYGQgBfeXkSQIsDym453jritQEqIL6+as7YvBilB9U3Iu+GPGoGEuGvV7HHFrX0xSKDammHcCV5TI1LX6tnj8u/yW/sIUZcXj3ID/6lhTNfqOeMKnPHC1j5jajvnDHcDa399ZNeSWeMKnDHGC+sOHdyyeHI7c4Pnj58yeWSes/d5fuTkKeN9zxHsXa6tkOHswzxTaMu9Y64Ymv+eXRsCPalpWavpK+nRNUvNZLC7dSONV1ulpDLfzu/VRCfp1En15dzhVrZ9X6lV01mrvFg6zbeSHTFt7vwF6Zw/d9qIrBWe9YePSutwP8ut/I8W'></img></div>
                <div className='i4'><img src='https://imaster.kg/img/prop4.png'></img></div>
                <div className='t1'>
                    <div className='text-danger tt'>5 ЛЕТ</div>
                        мы ремонтируем <br></br>компьютеры и ноутбуки.
                </div>
                <div className='t2'>За это время<br></br>
                        мы установили более<br></br>
                    <div className='text-danger tt'>
                        15 000</div>
                программ</div>
                <div className='t3'>Нашли и уничтожили<br></br>
                более<br></br>
                    <div className='text-danger tt'>
                        6000</div>
                вирусных угроз</div>
                <div className='t4'>И в общей сложности починили<br></br>
                    <div className='text-danger tt'>
                        16 300</div>
                комьютеров</div>
            </div>
<br></br>


            <div class="card text-center">
                <h3 class="card-header">
                    ПОСЛЕ ПРОВЕДЕНИЯ РАБОТ МЫ ГАРАНТИРУЕМ:
  </h3>
                <div class="card-body">
                    <div className='cardsGrid col'>
                        <div className='row'>
                            <div className=' col'><div className='row'> <div className='col'><img src='https://imaster.kg/img/garant1.png'></img></div> <div className='cardTextCenter col'>Быструю загрузку вашего компьютера или ноутбука при включении.</div></div></div>
                            <div className=' col'><div className='row'> <div className='col'><img src='https://imaster.kg/img/garant2.png'></img></div> <div className='cardTextCenter col'>Бесперебойную работу установленных программ.</div></div></div>
                        </div>
                        <div className='row'>
                            <div className=' col'><div className='row'> <div className='col'><img src='https://imaster.kg/img/garant3.png'></img></div> <div className='cardTextCenter col'>Безопасную работу пользователя в сети Интернет.</div></div></div>
                            <div className=' col'><div className='row'> <div className='col'><img src='https://imaster.kg/img/garant4.png'></img></div> <div className='cardTextCenter col'>Полное восстановление работы компьютера после вируса.</div></div></div>
                        </div>

                    </div>
                </div>
                <div class="card-footer text-muted">
                    <h3 className='bgz'>
                        ГАРАНТИЯ НА ВСЕ РАБОТЫ до 12 МЕСЯЦЕВ
         </h3>
                </div>
            </div>
<br></br>
<br></br>


            <div class="card text-center">
                <h3 class="card-header">
                РАБОТАЯ С НАМИ, ВЫ ЭКОНОМИТЕ:
  </h3>
                <div class="card-body">
                    <div className='cardsGrid col  wow animate__animated animate__slideInLeft p-3'  data-wow-duration = "2s" data-wow-delay = "5s">
                       <div className='row p-3'><h2 className='col text-info'>01<hr></hr>СРЕДСТВА</h2><div className='col'>Диагностика вашего компьютера - совершенно бесплатно*; действующие скидки существенно экономят ваш бюджет.</div></div>
                       <div className='row p-3'><h2 className='col text-info'>02<hr></hr>СИЛЫ</h2><div className='col'>Вам не нужно никуда ехать, мы сами приедем в удобное для вас время и место, осмотрим компьютер и произведем необходимые ремонтные работы.</div></div>
                       <div className='row p-3'><h2 className='col text-info'>03<hr></hr>ВРЕМЯ</h2><div className='col'>Мастер выезжает через 10-15 минут после звонка, и приступает к ремонту вашего компьютера уже через час.</div></div>
                       
                    </div>
                </div>
                <div class="card-footer text-muted">
                    <h4 className='text-lg text-right'>
                    *Услуги бесплатны при проведении работ.
         </h4>
                </div>
            </div>

        <div className='stock row'>
            <div className='col gridInContainerCenter p-3'>
                <h3 className='s1 pl-3'>ДАРИМ СКИДКУ ДО 20% НА ВСЕ РАБОТЫ:</h3>
                <h4 className='s2 pl-3'><img src='https://imaster.kg/img/ok.png'></img>При одновременном ремонте двух и более компьютеров</h4>
                <h4 className='s3 pl-3'><img src='https://imaster.kg/img/ok.png'></img>При повторном обращении</h4>
                <h4 className='s4 pl-3'><img src='https://imaster.kg/img/ok.png'></img>Всем пенсионерам и льготникам</h4>
            </div>
            <div className='col'>
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
                <button className='btnk btn-center btn btn-warning'>ВЫЗВАТЬ МАСТЕРА</button>
                <div className='p-3 text-right'>
                *Ваши персональные данные в безопасности
                </div>
                </div>
            </div>
        </div>





        </div>
    )
}

export default Content
