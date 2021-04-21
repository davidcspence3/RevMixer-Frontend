import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SamplePlaylistService } from 'src/app/services/sample-playlist.service';
import { SampleSetService } from 'src/app/services/sample-set.service';
import { UsersSampleSetsService } from 'src/app/services/users-sample-sets.service';
import { UsersSampleService } from 'src/app/services/users-sample.service';
import { PlaylistServiceService } from 'src/app/services/playlist-service.service';
import { SampleService } from 'src/app/services/sample.service';
import { UploadedMusicRestService } from 'src/app/services/uploaded-music-rest.service';
import { UserRestService } from 'src/app/services/user-rest.service';
import { UserssampleService } from 'src/app/services/userssample.service';
import { environment } from 'src/environments/environment';
import { UsersSampleSets } from 'src/app/Models/UsersSampleSets';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

import { SampleHubComponent } from './sample-hub.component';

describe('SampleHubComponent', () => {
  let component: SampleHubComponent;
  let fixture: ComponentFixture<SampleHubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleHubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    const authMock = {
      user$: { client: { email: 'someValue' } },
      auth0Client: {},
      configFactory: {},
      location: null,
      navigator: {},
      isLoadingSubject$: {},
      errorSubject$: {},
      refreshState$: {},
      ngUnsubscribe$: {},
      isLoading$: false,
      isAuthenticatedTrigger$: {},
      isAuthenticated$: {},
      idTokenClaims$: {},
      error$: {},
      ngOnDestroy: {},
      loginWithRedirect: {},
      loginWithPopup: {},
      logout: {},
      getAccessTokenSilently: {},
      getAccessTokenWithPopup: {},
      shouldHandleCallback: {},
      handleRedirectCallback: {}
    };
    let httpClient: { GetUserByEmail: jasmine.Spy }
    httpClient = jasmine.createSpyObj('HttpClient', ['get']);
    let userService: { GetUserByEmail: jasmine.Spy }
    userService = jasmine.createSpyObj('UserService', ['get']);
    let uploadmusicService: { GetUserByEmail: jasmine.Spy }
    uploadmusicService = jasmine.createSpyObj('UploadmusicService', ['get']);
    let usersSampleService:{ GetUserByEmail: jasmine.Spy }
    usersSampleService = jasmine.createSpyObj('SampleSetsService', ['get']);
    component = new SampleHubComponent(httpClient as any, authMock as any, UsersSampleSetsService as any, SamplePlaylistService as any, ActivatedRoute as any, UserRestService as any, SampleService as any, UsersSampleService as any, AuthService as any, SampleSetService as any);
  
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /*
  it('should update the message if file upload is successful', () => {
    let testFile: any;
    testFile = [];
    expect(component.message).toBe('');

    component.uploadFile(testFile);

    expect(component.message).toBe('Upload success.');
  });
  */
});
