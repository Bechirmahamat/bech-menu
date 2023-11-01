# html stucture

   <h1 className="mt-3">
                Our <span className="text-primary">Menu</span>
                <div className="underline "></div>
   </h1>
  <div className="container my-2">
                <div className="btn-container">
                    <button className="btn btn-outline-orange">all</button>
                    <button className="btn btn-outline-orange">
                        breakfeat
                    </button>
                    <button className="btn btn-outline-orange">lunch</button>
                    <button className="btn btn-outline-orange">dinner</button>
                </div>
                <div className="row my-1 py-1">
                    <div className="item">
                        <div className="image-container">
                            <img src={menu[1].img} alt="" />
                        </div>
                        <div className="px-2">
                            <div className="title">
                                <h4>{menu[1].title}</h4>
                                <span className="bg-blue-marin">
                                    ${menu[1].price}
                                </span>
                            </div>
                            <p className="desc">{menu[1].desc}</p>
                        </div>
                    </div>
                </div>
            </div>

##### btns

<button
className={active("breakfast")}
onClick={() => getClickbtn("breakfast")} >
breakfast
</button>
<button
className={active("lunch")}
onClick={() => getClickbtn("lunch")} >
lunch
</button>
<button
className={active("shakes")}
onClick={() => getClickbtn("shakes")} >
shakes
</button>
#   b e c h - m e n u  
 