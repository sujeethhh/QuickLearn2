import Grid from "@mui/material/Grid";
import Header from "@/components/Header";     // Client Component
import Hero from "@/components/Hero";         // Client Component
import Footer from "@/components/Footer";     // Server Component
import LiveChat from "@/components/LiveChat"; // Client Component
import Clients from "@/components/Clients";   // Server or Client (depends on animation)
import CoursesWeOffer from "@/components/CoursesWeOffer"; // Server Component
import Testimonials from "@/components/Testimonial";      // Client Component
import ClientHomeWrapper from "@/components/PageClientHomeWrapper"; // NEW HYBRID WRAPPER

export default async function HomePage() {
  const res = await fetch("https://quicklearnsys.com/data/testimonials/testimonials.json", {
    cache: "no-store",
  });

  const testimonials = await res.json();

  const baseUrl = "https://quicklearnsys.com";

  // Fix the invalid relative image paths
  const fixedTestimonials = testimonials.map(item => ({
    ...item,
    image: item.image.replace(/^\.\//, `${baseUrl}/`),
  }));

  const res2 = await fetch("https://quicklearnsys.com/data/clients/clients.json", {
    cache: "no-store",
  });

  const clients = await res2.json();

  const fixedclients = clients.map(item => ({
    ...item,
    logo: item.logo.replace(/^\.\//, `${baseUrl}/`),
  }));


  return (
    <Grid container direction="column" spacing={0}>
      <Grid item xs={12}>
        <ClientHomeWrapper />
      </Grid>
      
      <Grid item xs={12}>
        <Testimonials testimonials={fixedTestimonials} />
      </Grid>
      
      <Grid item xs={12}>
        <Clients clients={fixedclients} />
      </Grid>

      <Grid item xs={12}>
        <Footer />
      </Grid>
      
      <Grid item xs={12}>
        <LiveChat />
      </Grid>
    </Grid>
  );
}
