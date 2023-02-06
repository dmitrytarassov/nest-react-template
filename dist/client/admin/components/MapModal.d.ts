/// <reference types="react" />
import 'leaflet/dist/leaflet.css';
interface MapModalProps {
    open: boolean;
    city?: string;
    onClose: (v?: number[]) => void;
    coordinates?: number[];
}
declare const MapModal: ({ open, city, onClose, coordinates: _defaultCoordinates, }: MapModalProps) => JSX.Element;
export default MapModal;
