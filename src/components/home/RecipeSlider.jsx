import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import RecipeCard from '../recipe/RecipeCard'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css/navigation'

function RecipeSlider({ recipes }) {
    return (
        <Swiper
            className='swiper'
            modules={[Navigation, Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false, }}
            navigation
            spaceBetween={40}
            breakpoints={{
                320: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
            }}
        >
            {recipes.map((recipe) => (
                <SwiperSlide key={recipe.id}>
                    <RecipeCard
                        id={recipe.id}
                        title={recipe.title}
                        description={recipe.description}
                        imageUrl={recipe.imageUrl}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default RecipeSlider