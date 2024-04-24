import "./sectionHeading.scss";
export default function SectionHeading({ content }) {
  return (
    <h2 className="sectionHeading w-100 text-center mb-5" data-aos="fade-left">
      {content}
    </h2>
  );
}
