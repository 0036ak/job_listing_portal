

function About() {
    return (
        <div>
            <div class="flex-row items-center justify-center mt-4 mb-4">
                <p class="text-2xl font-semibold text-center">About Us</p>
            </div>

            <section class="p-8 bg-gray-200">
                <div class="container mx-auto">
                    <div class="flex flex-col lg:flex-row items-center lg:items-start">

                        <div class="w-full lg:w-1/2 mb-6 lg:mb-0 lg:pr-6">
                            <img src="https://img.freepik.com/free-photo/jobs-new-business-launch-plan-concept_53876-124944.jpg?t=st=1726136002~exp=1726139602~hmac=247874ac4ded4aef4315088cc5a9fbd476ff6187ec7ac874cd32f1e87d65cef3&w=900" class="w-full h-auto rounded-lg shadow-lg"></img>
                        </div>

                        <div class="w-full lg:w-1/2">
                            <p class="text-lg leading-relaxed text-gray-700">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About;

