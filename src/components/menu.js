import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import { useStaticQuery, graphql } from "gatsby"

export default () => {
const data= useStaticQuery(
	graphql`
        query {
            site {
                siteMetadata {
	                title
	            }
	        }
        }
    `
)

    return (
        <nav css={css`display:flex; justify-content:flex-end; padding:20px 0;`}>
            <Link to={`/`} css={css`padding:0 5px`}>
                {data.site.siteMetadata.title}
            </Link>
            <Link to={`/blog`} css={css`padding:0 5px`}>
                Blog
            </Link>
            <Link to={`/about/`} css={css`padding:0 5px`}>
                About
            </Link>
            <Link to={`/about/`} css={css`padding:0 0 0 5px`}>
                Test
            </Link>
        </nav>
    )
}