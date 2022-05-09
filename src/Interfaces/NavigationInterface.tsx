export default interface NavigationInterface {
    openBottomNav: boolean;
    handleOpenBottomNav: () => void;
    tabValue: number;
    handleTabValue: (newTabValue:number) => void;
}