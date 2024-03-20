export default function Home() {
	return (
		<>
			<header>
				<h1>Welcome to the Genesee County Women's Resource Directory!</h1>
				<p>
					Our mission is to connect underserved women in Genesee County,
					Michigan, with the resources and support they need to thrive.
				</p>
			</header>

			<main className="flex min-h-screen flex-col items-center justify-between p-24">
				<section className="mb-8">
					<h2 className="text-2xl font-bold mb-4">Healthcare Services</h2>
					<ul className="list-disc ml-4">
						<li>
							Women's clinics and healthcare providers offering affordable or
							free services
						</li>
						<li>Mental health resources and support groups</li>
						<li>
							Assistance programs for accessing prescription medications and
							treatments
						</li>
					</ul>
				</section>

				<section className="mb-8">
					<h2 className="text-2xl font-bold mb-4">Employment and Education</h2>
					<ul className="list-disc ml-4">
						<li>Job training programs and career development resources</li>
						<li>
							Educational opportunities, including scholarships and vocational
							training
						</li>
						<li>
							Assistance with resume writing, interview preparation, and job
							placement services
						</li>
					</ul>
				</section>

				<section className="mb-8">
					<h2 className="text-2xl font-bold mb-4">Housing and Shelter</h2>
					<ul className="list-disc ml-4">
						<li>
							Emergency shelters and transitional housing options for women and
							families
						</li>
						<li>Rental assistance programs and affordable housing resources</li>
						<li>
							Supportive services for survivors of domestic violence and
							homelessness
						</li>
					</ul>
				</section>
				<section className="mb-8">
					<h2 className="text-2xl font-bold mb-4">Financial Assistance</h2>
					<ul className="list-disc ml-4">
						<li>Financial literacy workshops and counseling services</li>
						<li>
							Programs offering assistance with utility bills, groceries, and
							other basic needs
						</li>
						<li>
							Benefits enrollment assistance for programs such as SNAP,
							Medicaid, and TANF
						</li>
					</ul>
				</section>

				<section className="mb-8">
					<h2 className="text-2xl font-bold mb-4">Legal Aid and Advocacy</h2>
					<ul className="list-disc ml-4">
						<li>
							Legal aid organizations providing free or low-cost legal services
						</li>
						<li>
							Advocacy groups and resources for women's rights and gender
							equality
						</li>
						<li>
							Support services for survivors of domestic violence, sexual
							assault, and human trafficking
						</li>
					</ul>
				</section>

				<section className="mb-8">
					<h2 className="text-2xl font-bold mb-4">
						Community Support and Outreach
					</h2>
					<ul className="list-disc ml-4">
						<li>
							Support groups and peer counseling services for women facing
							various challenges
						</li>
						<li>
							Community centers and organizations offering recreational
							activities and social events
						</li>
						<li>
							Volunteer opportunities and ways to get involved in supporting
							underserved women in our community
						</li>
					</ul>
				</section>
			</main>

			<footer>
				<p>
					For additional information or assistance, please contact us at
					[Organization Name], located at [Address], or call us at [Phone
					Number]. Our dedicated team is here to assist you and provide any
					support you may need.
				</p>
				<p>
					Together, we can empower underserved women in Genesee County, MI, and
					create a brighter future for our community. Thank you for your
					support!
				</p>
			</footer>
		</>
	);
}
