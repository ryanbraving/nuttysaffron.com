import React from "react";
// import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <p>Welcome to Nutty Saffron Website.</p>
    <p>This site is now under development and will be live soon.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    In the meantime you can find us on Instagram and Facebook{" "}
    <b>@NuttySaffron</b> or through below links:
    <br />
    <a
      href="https://www.facebook.com/nuttysaffron/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Facebook
    </a>
    <br />
    <a
      href="https://www.instagram.com/nuttysaffron/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Instagram
    </a>
    <br />
    <br />
  </Layout>
);

export default IndexPage;
