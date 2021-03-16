import { RouteComponentProps } from "react-router";
import {
  IonContent,
  IonHeader,
  IonFab,
  IonIcon,
  IonFabButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonCheckbox,
  IonNote,
  IonLabel,
  IonBadge,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab1.css";
import { add } from "ionicons/icons";

import { ScreenOrientation } from "@ionic-native/screen-orientation";

const Tab1: React.FC<RouteComponentProps> = (props) => {
  console.log("TAB1: " + ScreenOrientation.type);
  ScreenOrientation.onChange().subscribe(() => {
    console.log("Orientation Changed in tab1");
    console.log(ScreenOrientation.type);
  });
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem>
            <IonCheckbox slot="start" />
            <IonLabel>
              <h1>Create Idea</h1>
              <IonNote>Run Idea by whut whut?</IonNote>
            </IonLabel>
            <IonBadge color="success" slot="end">
              6 Days
            </IonBadge>
          </IonItem>
        </IonList>

        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton onClick={() => props.history.push("/new")}>
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
