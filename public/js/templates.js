// import holder from 'holderjs'

const UID = new Date().getTime()

export const Experience = `<div class="experience">
<input type="checkbox">
<article draggable="true" class="grid gs16" id="Experience-${UID}">

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
                                        <img src="http://placehold.it/48" title="placeholder">
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

                                    <div class="grid--cell mb8" contenteditable="true">
                                        <span class="fs-caption fc-black-700">From → To</span>
                                        <span class="fs-caption fc-black-500">(Duration)</span>
                                    </div>
<!--
                                    <div class="mtn8 mb16">
                                        <div class="timeline-item-tags g-col
                                            g-row fl-none ff-row-wrap mt16">
                                            <span class="post-tag">Tech tag</span>
                                        </div>
                                    </div>
//-->
                                    <div class="fs-body1 fc-black-700">
                                        <p contenteditable="true">Description...<div><br></div></p>
                                    </div>
                                </div>
                                                        </article>
                                                        </div>`;
														
    export const Education = `<div class="education">
    <input type="checkbox">
	<article class="grid gs16 first" id="Education-${UID}">

	<div class="grid--cell">
			<div class="g-center cv-logo">
				<img src="http://placehold.it/48" role="img" class="cv-image" title="placeholder" onerror="handleListImageError(this)">
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
</article>
</div>`;


export const Certification = `<div class="certification">
<input type="checkbox">
<article class="grid gs16 first"
                                id="${UID}">

                                <div class="grid--cell">
                                    <div class="g-center cv-logo-blank"><svg
                                            aria-hidden="true" class="svg-icon
                                            iconMedal" width="18" height="18"
                                            viewBox="0 0 18 18"><path d="M9
                                                17c-2.2 0-4-1.57-4-3.5S6.8 10 9
                                                10s4 1.57 4 3.5S11.2 17 9
                                                17zm0-1.9c1.21 0 2.1-.78 2.1-1.6
                                                0-.82-.89-1.6-2.1-1.6s-2.1.78-2.1
                                                1.6c0 .82.89 1.6 2.1 1.6z"
                                                fill="#FFC166"></path><path
                                                d="M6.9 9.42a5.53 5.53 0 0 1
                                                3.5-.24L4.5 1H1.47a.25.25 0 0
                                                0-.2.39L6.9 9.42zm2.88-3.26L11.6
                                                8.7h.01l5.11-7.3a.25.25 0 0
                                                0-.2-.4H13.5L9.78 6.16z"
                                                opacity=".4" fill="#3F3F3F"></path></svg></div>
                                </div>

                                <div class="grid--cell fl1 fd-column">
                                    <h3 class="grid--cell mb2 fs-subheading">
                                        <a
                                            href="https://www.testdome.com/cert/h68nvd6mwu"
                                            rel="nofollow" title="HTML/CSS/JS
                                            (Hard)" target="_blank">HTML/CSS/JS
                                            (Hard)</a>
                                    </h3>


                                    <div class="grid--cell mb8">
                                        <span class="fs-caption fc-black-700">May
                                            2015 → Current</span>
                                        <span class="fs-caption fc-black-500">(5
                                            years, 1 month)</span>
                                    </div>

                                    <div class="mtn8 mb16">
                                        <div class="timeline-item-tags g-col
                                            g-row fl-none ff-row-wrap mt16">
                                            <span class="post-tag">html</span>
                                            <span class="post-tag">css</span>
                                            <span class="post-tag">javascript</span>
                                        </div>

                                    </div>

                                </div>
                            </article>

                        </div>`;


export const Paper = `<div class="paper">
                            <article class="grid gs16 last" id="Public
                                Artifacts-606077">

                                <div class="grid--cell">
                                    <div class="g-center cv-logo-blank"><svg
                                            aria-hidden="true" class="svg-icon
                                            iconDocument" width="18" height="18"
                                            viewBox="0 0 18 18"><path d="M3 3a2
                                                2 0 0 1 2-2h6l4 4v10a2 2 0 0 1-2
                                                2H5a2 2 0 0
                                                1-2-2V3zm7-1.5V6h4.5L10 1.5z"></path></svg></div>
                                </div>

                                <div class="grid--cell fl1 fd-column">
                                    <h3 class="grid--cell mb2 fs-subheading">
                                        <a
                                            href="https://www.academia.edu/6148289/Clinical_Safety_and_Holistic_Hygiene"
                                            rel="nofollow" title="Clinical
                                            Safety and Holistic Hygiene | Paulo
                                            Basto - Academia.edu"
                                            target="_blank">Clinical Safety and
                                            Holistic Hygiene | Paulo Basto -
                                            Academia.edu</a>
                                    </h3>



                                    <div class="mtn8 mb16">

                                    </div>

                                    <div class="fs-body1 fc-black-700">
                                        <p>Academia.edu helps academics follow
                                            the latest research.</p>

                                    </div>
                                </div>
                            </article>

                        </div>`



export const Reading = `<div class="reading">      
                        <article class="mb24
                            js-hidden-item d-none">

                            <h2 class="mb2 fs-subheading fc-black-800">
                                <a
                                    href="http://www.amazon.com/Hackers-Painters-Big-Ideas-Computer/dp/1449389554%3FSubscriptionId%3DAKIAIIBINOD46VC3JCLQ%26tag%3Dstackoverfl08-20%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3D1449389554"
                                    rel="nofollow" target="_blank">Hackers
                                    &amp; Painters: Big Ideas from the
                                    Computer Age</a>
                            </h2>
                            <h3 class="mb0 fs-body2 fc-black-500">Paul
                                Graham</h3>
                        </article>
                    </div>`


export const Volunteer = `<div class="volunteer">    
                        <article class="grid gs16 first last" contenteditable="true">

                        <div class="grid--cell">
                            <div class="g-center cv-logo-blank">
                            <img src="http://placehold.it/48" title="placeholder">
                            </div>
                        </div>

                        <div class="grid--cell fl1 fd-column">
                            <h3 class="grid--cell mb2 fs-subheading
                                fc-black-800">
                                Bombeiros Voluntários de Mafra
                            </h3>

                            <h4 class="grid--cell mb8 fs-body2
                                fc-black-500">Firefighter</h4>
                            <div class="grid--cell mb8">
                                <span class="fs-caption fc-black-700">
                                    Jan 2010 → Jan 2011
                                  </span>
                            </div>
                            <div class="mtn8 mb16">
                                <div class="timeline-item-tags g-col
                                    g-row fl-none ff-row-wrap mt16">
                                    <span class="post-tag">Disaster</span>
                                    <span class="post-tag">Humanitarian Relief</span>
                                </div>
                            </div>
                        </div>
                    </article>                              
                              </div>`