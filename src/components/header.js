import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header
    style={ {
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    } }
  >
    <div
      style={ {
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0 1.0875rem`,
      } }
    >
      <h1 style={{ margin: 0, position: `relative` }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          RTG
        </Link>
        <Link
          to="/cart"
          style={{
            color: `white`,
            textDecoration: `none`,
            fontSize: `1rem`,
            float: `right`,
            position: `absolute`,
            top: `.75em`,
            right: `1em`,
            fontWeight: `700`
          }}
        >
          CART
        </Link>
      </h1>
    </div>
  </header>
)

export default Header