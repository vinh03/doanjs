const settings = {
    dots : false,
    infinite : false,
    speed : 500,
    slidesToshow : 3,
    slidesToScroll : 1
}
const CustomSlider = ({products ,activedTab}) => {
    return (
        <>
            {products && <Slider {...settings}>
                {
                    products?.map((el,index) => (
                        <Products>
                            key = {index}
                            pid ={el.id}
                            productData = {el}
                            isNew ={activedTab == 1 ? false : true}
                        </Products>
                    )
                )
                }</Slider>}
        </>
    )
}