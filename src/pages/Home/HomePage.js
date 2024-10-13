import {Hero,FeaturedProducts,Testimonials,Faq} from "../";
import { useTitle } from "../../hooks/useTitle";

export const HomePage = () => {

  useTitle("CodeBook-Home Page");

  return (
    <main>
    <Hero/>
    <FeaturedProducts/>
    <Testimonials/>
    <Faq/>
    </main>
  )
}
