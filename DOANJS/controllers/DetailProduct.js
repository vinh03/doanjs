const DetaiProduct = () => {
    const {pid,title,category } = useParams()
    const [ apiGetProduct ] = useState(null)
    const fetchProductData = async () => {
       const response = await apiGetProduct(pid)
       if (response.success) setProduct (response.productData)   
    }
    useEffect(() => {
        if(pid) fetchProductData ()
    },[pid])
    return (
        <div className = 'w-full'>
            <div className = 'h-[81px] flex justify-center items-center '>
                <div className = 'w-main'>
                    <h3>{title}</h3>
                    <Breadcrumb title = {title} category ={ category} />
                </div>
            </div>
            <div className = 'w-main m-auto mt-4 flex'>
                <div className = ' flex-4'>
                    <div>
                        < ReactImageMagnify {...{
                            smallImage: {
                                alt : 'wristatch by Ted Baker London',
                                isFluidWidth : true,
                                src : watchImg300
                            },
                            largeImage: {
                                src : watchImg1200,
                                width : 1200,
                                height : 1800
                            }
                        }}/>
                    </div>
                   <img src = {product?.images} alt="product"  className='h-[458px] object-cover'/>
                </div>
                <div className = 'w-full'>
                   <Slider {...settings}>
                        {product?.images?.map(el => (
                            <img src = {el} alt='sub-product' className='h-[1423px] w-[143px] boder object-cover'/>
                        ))}
                   </Slider>
                </div>
                <div boder boder-red-300 flex-4>
                    <h2 className = 'text-[30px] font-semibold'> { '${formatMoney( fotmatPrice(product?.price))'} VNĐ</h2>
                    <div className= 'flex items-center gap-1'>
                        {renderStartFromNumber(product.totalRatings)?.map(el => (<span key = {el}>{el}</span>))}
                    </div>
                    <ul className='list-item'>
                        {product.description?.map(el => (<li>{el}</li>))}
                    </ul>
                </div>
                <div boder boder-green-300 flex-4>
                   information
                </div>
                
            </div>
            <div className= 'h-[500px] w-full'></div>
        </div>
    )
}

export default DetaiProduct