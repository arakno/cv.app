const uid = new Date().getTime();
export const Experience = `<input type="checkbox">
<article draggable="true" class="grid gs16" id="Experience-${uid}">

                                <div class="grid--cell">
                                    <div class="g-center cv-logo-blank
                                        js-logo-blank dno"><svg aria-hidden="true" class="svg-icon
                                            iconIndustry" width="18" height="18" viewBox="0 0 18 18"><path d="M10
                                                16v-4H8v4H2V4c0-1.1.9-2 2-2h6a2
                                                2 0 0 1 2 2v2h2a2 2 0 0 1 2
                                                2v8h-6zM4 4v2h2V4H4zm0
                                                4v2h2V8H4zm4-4v2h2V4H8zm0
                                                4v2h2V8H8zm-4 4v2h2v-2H4zm8
                                                0v2h2v-2h-2zm0-4v2h2V8h-2z"></path></svg></div>
                                    <div class="g-center cv-logo">
                                        <img src="https://via.placeholder.com/48" role="img" class="cv-image
                                            js-list-img anonymizable" title="placeholder" onerror="handleListImageError(this)" >
                                    </div>
                                </div>

                                <div class="grid--cell fl1 fd-column">
                                    <h3 contenteditable="true" class="grid--cell mb2 fs-subheading
                                        fc-black-800">
                                        Role
                                    </h3>

                                    <h4 class="grid--cell mb8 fs-body2
																				anonymizable">
																				<a contenteditable="true" href="" rel="nofollow" title="..." target="_blank">Company</a>
																		</h4>

                                    <div class="grid--cell mb8">
                                        <span class="fs-caption fc-black-700">From → To</span>
                                        <span class="fs-caption fc-black-500">(Duration)</span>
                                    </div>

                                    <div class="mtn8 mb16">
                                        <div class="timeline-item-tags g-col
                                            g-row fl-none ff-row-wrap mt16">
                                            <span class="post-tag">Tech tag</span>
                                        </div>
                                    </div>

                                    <div class="fs-body1 fc-black-700">
                                        <p contenteditable="true">Description...<div><br></div></p>
                                    </div>
                                </div>
														</article>`;
export const Education = `<input type="checkbox">
	<article class="grid gs16 first" id="Education-${uid}">

	<div class="grid--cell">
			<div class="g-center cv-logo">
				<img src="https://via.placeholder.com/48" role="img" class="cv-image" title="placeholder" onerror="handleListImageError(this)">
			</div>
	</div>

	<div class="grid--cell fl1 fd-column">
			<h3 contenteditable="true" class="grid--cell mb2 fs-subheading
					fc-black-800">
					Course
			</h3>

			<h4 contenteditable="true" class="grid--cell mb8 fs-body2
					fc-black-500">Institution</h4>

			<div class="grid--cell mb8">
					<span class="fs-caption fc-black-700">from
							→ to</span>
			</div>

			<div class="fs-body1 fc-black-700">
					<p contenteditable="true">Accomplishments</p>
			</div>
	</div>
</article>`;
