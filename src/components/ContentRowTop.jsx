import React from "react";
import ContentRowMovies from './ContentRowMovies'
import LastMovieInDb from './LastMovieInDb'
import GenresInDb from './GenresInDb'

function ContentRowTop() {
    return (
        // <!-- Content Row Top -->
        <div class="container-fluid">

            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">App Dashboard</h1>
            </div>

            {/* <!-- Content Row Movies--> */}
            <ContentRowMovies />
            
            {/* <!-- Content Row Last Movie in Data Base --> */}
            <div class="row">
                {/* <!-- Last Movie in DB --> */}
                <LastMovieInDb />

                {/* <!-- Genres in DB --> */}
                <GenresInDb />
            </div>
        </div>
    );
}

export default ContentRowTop;
