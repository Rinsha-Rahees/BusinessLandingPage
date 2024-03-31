import { Disclosure } from "@headlessui/react";
import { FAQS } from "./Constants";
import IMAGES from "../images/Images";

export default function Collapse() {
  return (
    <div className="w-full pt-6 text-base lg:text-lg 2xl:text-2xl">
      <div className="mx-auto w-full rounded-2xl bg-white p-6">
        {FAQS.map((faq) => {
          return (
            <Disclosure key={faq?.id}>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 pt-4 text-left font-medium ">
                    <span>{faq?.question}</span>
                    {open ? (
                      <img
                        src={IMAGES?.minus}
                        alt="Minus icon"
                        className="w-5"
                      />
                    ) : (
                      <img
                        src={IMAGES?.plus}
                        alt="Pluse Icon"
                        className="w-5"
                      />
                    )}
                  </Disclosure.Button>
                  <Disclosure.Panel className="p-4 text-black">
                    {faq?.answer}
                  </Disclosure.Panel>
                  <hr className="border" />
                </>
              )}
            </Disclosure>
          );
        })}
      </div>
    </div>
  );
}
