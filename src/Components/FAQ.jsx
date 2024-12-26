const FAQ = () => {
  return (
    <div className="mt-14 mb-6">
      <h2 className="text-3xl font-bold text-center pt-4 pb-8 underline underline-offset-4">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        <div className="collapse rounded-md collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title text-xl font-medium text-[#535555]">
            What is the warranty policy for BOLD bikes?
          </div>
          <div className="collapse-content">
            <p className="text-[#535555]">
              There is a warranty for frames of 5 years. However, the warranty
              is only valid, if a proof of maintenance from an authorized BOLD
              dealer in every of the first three years after the purchase can be
              brought forward. The authorized BOLD dealer is admonished to
              confirm the maintenance work by stamp and signature. In case no or
              an incomplete proof of annual maintenance can be brought forward
              the warranty for the frame is reduced from 5 to 3 years. Costs for
              maintenance and service have to be borne by the owner of the BOLD
              bike.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium text-[#535555]">
            What is the status of my warranty claim?
          </div>
          <div className="collapse-content">
            <p className="text-[#535555]">
              We keep your BOLD dealer informed on the progress of your warranty
              claim. Please contact your BOLD dealer for further information.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium text-[#535555]">
            How do I wash and care for my BOLD apparel?
          </div>
          <div className="collapse-content">
            <p className="text-[#535555]">
              Please follow the care instructions on the tag of your BOLD
              garment. Before washing, we recommend to zip the front closure,
              pockets and pit zips completely, and fasten all flaps and straps.
              It is recommended to wash dark colors together. As we mainly use
              fabrics with quick-drying properties, there is no need to tumble
              dry the garment. Do not iron it, as the fabric fiber is mostly
              made of a Polyester and/or Polyamide base.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium text-[#535555]">
            What bike size do I need?
          </div>
          <div className="collapse-content">
            <p className="text-[#535555]">
              The right bike size can be influenced by several variables, such
              as flexibility or personal anthropometrics. The BOLD sizing chart
              which can be found on our website is a solid starting point to
              choose the right frame size. We advise you to buy your new bike at
              an authorised BOLD dealer. Our dealerships have a wealth of
              experience in choosing the right frame size and fit you properly
              on your new bike.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium text-[#535555]">
            Can a carbon bike frame be repaired if damaged?
          </div>
          <div className="collapse-content">
            <p className="text-[#535555]">
              BOLD does not offer any repair service for carbon bike frames.
              Once the carbon on a bike has been compromised we do not recommend
              that it be repaired. The carbon-fibers could be compromised far
              beyond what can be seen on a visual inspection, therefore we dont
              recommend the repairing of broken carbon frames.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
