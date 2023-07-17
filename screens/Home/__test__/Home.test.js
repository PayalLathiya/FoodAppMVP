import {defineFeature, loadFeature} from 'jest-cucumber';
import {shallow, ShallowWrapper} from 'enzyme';
import Home from '../Home';
import {useEffect} from 'react';
import {dummyData} from '../../../constants';

const feature = loadFeature('./screens/Home/__test__/homescenario.feature');

jest.mock('React', () => ({
  ...jest.requireActual('React'),
  useEffect: jest.fn(),
}));

defineFeature(feature, test => {
  beforeEach(() => {
    jest.resetModules();
    jest.doMock('react-native', () => ({Platform: {OS: 'web'}}));
  });

  test('User navigates to HomeScreen', ({given, when, then}) => {
    let homeWrapper;
    let instance;

    given('I am a User loading HomeScreen', () => {
      homeWrapper = shallow(<Home />);
      expect(homeWrapper).toBeTruthy();
      instance = homeWrapper.instance();
    });

    when('I navigate to the HomeScreen', () => {
      expect(homeWrapper).toBeTruthy();
    });

    then('HomeScreen will load with out errors', () => {
      // call use effect method on load screen
      useEffect.mock.calls[0][0]();
    });

    then('I can search product', () => {
      // text input test
      const searchInput = homeWrapper.findWhere(
        node => node.prop('testID') === 'serachInput',
      );
      searchInput.simulate('change', '123');

      // filter button test
      const filterButton = homeWrapper.findWhere(
        node => node.prop('testID') === 'filterButton',
      );
      filterButton.simulate('press');
      const filterModal = homeWrapper.findWhere(
        node => node.prop('isVisible') === true,
      );
      filterModal.props().onClose();

      // check serach value
      const searchInput1 = homeWrapper.findWhere(
        node => node.prop('testID') === 'serachInput',
      );
      expect(searchInput1.prop('value')).toBe('123');
    });

    then('I can select menu', () => {
      // menu flat list test
      const mainList = homeWrapper.findWhere(
        node => node.prop('testID') === 'mainList',
      );
      const headerComp = mainList.props().ListHeaderComponent();
      const headerCompWrapper = shallow(headerComp);

      const menuList = headerCompWrapper.findWhere(
        node => node.prop('testID') === 'menuList',
      );
      menuList.props().keyExtractor({id: 123});
      const renderMenuItem = menuList.props().renderItem({
        item: dummyData.menu[1],
        index: 0,
      });
       menuList.props().renderItem({
        item: dummyData.menu[0],
        index: 5,
      });
      const menuItemWraper = shallow(renderMenuItem);
      const menuItem0 = menuItemWraper.findWhere(
        node => node.prop('testID') === 'menuItem0',
      );
      menuItem0.simulate('press');
    });

    then('I can see recomanded', () => {
      // recomanded flat list test
      const mainList = homeWrapper.findWhere(
        node => node.prop('testID') === 'mainList',
      );
      const headerComp = mainList.props().ListHeaderComponent();
      const headerCompWrapper = shallow(headerComp);

      const recommendedSection = headerCompWrapper.findWhere(
        node => node.prop('title') === 'Recommended',
      );
      recommendedSection.simulate('press');

      const recomandedList = headerCompWrapper.findWhere(
        node => node.prop('testID') === 'recomandedList',
      );
      recomandedList.props().keyExtractor({id: 123});
      const renderMenuItem = recomandedList.props().renderItem({
        item: dummyData.menu[1],
        index: 0,
      });
      recomandedList.props().renderItem({
        item: dummyData.menu[1],
        index: 2,
      });
      const menuItemWraper = shallow(renderMenuItem);
      const menuItem0 = menuItemWraper.findWhere(
        node => node.prop('testID') === 'cardId0',
      );
      menuItem0.simulate('press');
    });

    then('I can see popular', () => {
      // popular flat list test
      const mainList = homeWrapper.findWhere(
        node => node.prop('testID') === 'mainList',
      );
      const headerComp = mainList.props().ListHeaderComponent();
      const headerCompWrapper = shallow(headerComp);

      const popularSection = headerCompWrapper.findWhere(
        node => node.prop('title') === 'Popular Near You',
      );
      popularSection.simulate('press');

      const popularList = headerCompWrapper.findWhere(
        node => node.prop('testID') === 'popularList',
      );
      popularList.props().keyExtractor({id: 123});
      const renderMenuItem = popularList.props().renderItem({
        item: dummyData.menu[1],
        index: 0,
      });
      popularList.props().renderItem({
        item: dummyData.menu[1],
        index: 2,
      });
      const menuItemWraper = shallow(renderMenuItem);
      const menuItem0 = menuItemWraper.findWhere(
        node => node.prop('testID') === 'cardId0',
      );
      menuItem0.simulate('press');
    });

    then('I can see and select food category', () => {
      // popular flat list test
      const mainList = homeWrapper.findWhere(
        node => node.prop('testID') === 'mainList',
      );
      const headerComp = mainList.props().ListHeaderComponent();
      const headerCompWrapper = shallow(headerComp);

      const foodCatList = headerCompWrapper.findWhere(
        node => node.prop('testID') === 'foodCatList',
      );
      foodCatList.props().keyExtractor({id: 123});
      const renderCatItem = foodCatList.props().renderItem({
        item: dummyData.categories[1],
        index: 0,
      });
      // to test condition
      foodCatList.props().renderItem({
        item: dummyData.categories[1],
        index: 1,
      });
      const catItemWraper = shallow(renderCatItem);
      const catItem0 = catItemWraper.findWhere(
        node => node.prop('testID') === 'catItem0',
      );
      catItem0.simulate('press');
    });

    then('I can see list of product', () => {
      // popular flat list test
      const mainList = homeWrapper.findWhere(
        node => node.prop('testID') === 'mainList',
      );
      mainList.props().keyExtractor({id: 123});
      const renderCatItem = mainList.props().renderItem({
        item: dummyData.menu[1],
        index: 0,
      });
      const catItemWraper = shallow(renderCatItem);
      const catItem0 = catItemWraper.findWhere(
        node => node.prop('testID') === 'catItem0',
      );
      catItem0.simulate('press');
    });
  });
});
