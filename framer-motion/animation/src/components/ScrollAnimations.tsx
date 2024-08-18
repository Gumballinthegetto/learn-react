import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollAnimations() {
  const { scrollYProgress } = useScroll();  

  const scaleX = useSpring(scrollYProgress);

  return (
    <div className="relative animation-container text-[1.2rem] text-justify mt-10 w-11/12">
      <motion.div 
        className="fixed py-2 border-2 w-full border-dark-green-grayish bg-muted-olive-green origin-left top-0"
        style={{ scaleX }}>
      </motion.div>
      <motion.div className="space-y-10 pb-4">
        <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Duis turpis magnis sed proin scelerisque tempus class bibendum primis. Maecenas est magnis fames orci eleifend ullamcorper maximus suspendisse maecenas. Posuere iaculis mus per varius diam efficitur pulvinar. At libero integer nullam varius nulla. Leo volutpat ligula ornare facilisis vitae. Odio amet himenaeos nec neque fringilla consequat fames elementum mus.</p>
        <p>Suscipit sit habitasse suspendisse mi facilisi a. Id fusce massa velit at molestie mollis. Tristique posuere eget curae massa sapien potenti maximus maximus lobortis. Fusce lectus adipiscing hac habitasse odio curae sollicitudin dignissim. Porttitor nec condimentum ut sem ultrices. Fames tristique fusce ex quam suscipit. Risus amet maximus fusce nam fringilla scelerisque tempus id.</p>
        <p>Ipsum scelerisque mauris senectus sem sem volutpat montes! Erat fusce pharetra felis suspendisse tristique ex. Mus tempor viverra elementum taciti massa malesuada volutpat. Placerat nunc enim lacus lacus posuere ridiculus etiam convallis. Nunc primis litora nunc adipiscing semper himenaeos dapibus justo. Tristique habitasse iaculis pharetra viverra; accumsan lacus nostra. Magna sapien elit enim vel, rhoncus vitae sodales. Leo est aliquet; turpis mauris sem ante enim cursus.</p>
        <p>Elit lacinia bibendum mollis dolor urna. Dis nostra suscipit himenaeos suscipit scelerisque. Quisque adipiscing praesent condimentum primis fringilla. Quisque sapien eros vel tellus eu suspendisse commodo tortor. Proin leo facilisi ornare; nam rutrum eros. Hendrerit dignissim pretium congue sapien, ultrices etiam conubia. Euismod mus ullamcorper sollicitudin lectus tellus tempor.</p>
        <p>Vestibulum ullamcorper iaculis neque class tincidunt a fermentum sollicitudin fusce. Urna dictum ut natoque cras ante quis laoreet pharetra conubia. Tincidunt varius convallis purus turpis mi? Nullam efficitur ultricies sed laoreet convallis nullam! Aliquam ultrices fermentum posuere fermentum fringilla mus purus senectus. Porta orci penatibus aptent facilisi interdum hac. Hendrerit aliquam imperdiet ligula rutrum porta.</p>
        <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Duis turpis magnis sed proin scelerisque tempus class bibendum primis. Maecenas est magnis fames orci eleifend ullamcorper maximus suspendisse maecenas. Posuere iaculis mus per varius diam efficitur pulvinar. At libero integer nullam varius nulla. Leo volutpat ligula ornare facilisis vitae. Odio amet himenaeos nec neque fringilla consequat fames elementum mus.</p>
        <p>Suscipit sit habitasse suspendisse mi facilisi a. Id fusce massa velit at molestie mollis. Tristique posuere eget curae massa sapien potenti maximus maximus lobortis. Fusce lectus adipiscing hac habitasse odio curae sollicitudin dignissim. Porttitor nec condimentum ut sem ultrices. Fames tristique fusce ex quam suscipit. Risus amet maximus fusce nam fringilla scelerisque tempus id.</p>
        <p>Ipsum scelerisque mauris senectus sem sem volutpat montes! Erat fusce pharetra felis suspendisse tristique ex. Mus tempor viverra elementum taciti massa malesuada volutpat. Placerat nunc enim lacus lacus posuere ridiculus etiam convallis. Nunc primis litora nunc adipiscing semper himenaeos dapibus justo. Tristique habitasse iaculis pharetra viverra; accumsan lacus nostra. Magna sapien elit enim vel, rhoncus vitae sodales. Leo est aliquet; turpis mauris sem ante enim cursus.</p>
        <p>Elit lacinia bibendum mollis dolor urna. Dis nostra suscipit himenaeos suscipit scelerisque. Quisque adipiscing praesent condimentum primis fringilla. Quisque sapien eros vel tellus eu suspendisse commodo tortor. Proin leo facilisi ornare; nam rutrum eros. Hendrerit dignissim pretium congue sapien, ultrices etiam conubia. Euismod mus ullamcorper sollicitudin lectus tellus tempor.</p>
        <p>Vestibulum ullamcorper iaculis neque class tincidunt a fermentum sollicitudin fusce. Urna dictum ut natoque cras ante quis laoreet pharetra conubia. Tincidunt varius convallis purus turpis mi? Nullam efficitur ultricies sed laoreet convallis nullam! Aliquam ultrices fermentum posuere fermentum fringilla mus purus senectus. Porta orci penatibus aptent facilisi interdum hac. Hendrerit aliquam imperdiet ligula rutrum porta.</p>
      </motion.div>
    </div>
  );
}