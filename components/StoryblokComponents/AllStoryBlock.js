import { Page } from "../Page"
import {Tour} from "../Tour"
import { Hero } from "../Hero"
import {Grid} from "../Grid"
import { getServerSideProps } from "@/pages/tours/[slug]"
import { Feature } from "../Feature"
import { Testimonail } from "../Testimonial"
import { RecommendTours } from "../RecommendTours"

export const components = {
    page: Page,
    tour: Tour,
    hero: Hero,
    grid: Grid,
    feature: Feature,
    testimonail: Testimonail,
    recommended_tours: RecommendTours,

}