import { OfflineFeature } from "./components/offline-feature";
import { ServiceInfo } from "./components/service-info";
import { ServicePresentation } from "./components/service-presentation";
import { ServiceWrapper } from "./components/service-wrapper";
import { kidsService, streamService, watchService } from "./constants";

export function ServicesSection() {
  return (
    <>
      <ServiceWrapper>
        <ServiceInfo
          title="Enjoy on your TV"
          subtitle="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
        />
        <ServicePresentation {...watchService} />
      </ServiceWrapper>

      <ServiceWrapper>
        <OfflineFeature />
        <ServiceInfo
          title="Download your shows to watch offline"
          subtitle="Save your favorites easily and always have something to watch."
        />
      </ServiceWrapper>

      <ServiceWrapper>
        <ServiceInfo
          title="Watch everywhere"
          subtitle="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
        />
        <ServicePresentation {...streamService} />
      </ServiceWrapper>

      <ServiceWrapper>
        <ServicePresentation {...kidsService} />
        <ServiceInfo
          title="Create profiles for kids"
          subtitle="Send kids on adventures with their favorite characters in a space made just for them—free with your membership."
        />
      </ServiceWrapper>
    </>
  );
}
